import { useState, useRef } from 'react'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

// Input length limits
const LIMITS = {
  name: 100,
  phone: 20,
  email: 254,
  message: 2000,
}

// Validation helpers
const isValidPhone = (phone) => /^[\d\s\-+()]{7,20}$/.test(phone.trim())
const isValidEmail = (email) => !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

// Rate limit: one submission per 60 seconds
const RATE_LIMIT_MS = 60_000

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const lastSubmitTime = useRef(0)

  const handleChange = (e) => {
    const { name, value } = e.target
    const limit = LIMITS[name]
    setFormData({ ...formData, [name]: limit ? value.slice(0, limit) : value })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Rate limiting
    const now = Date.now()
    if (now - lastSubmitTime.current < RATE_LIMIT_MS) {
      const secondsLeft = Math.ceil((RATE_LIMIT_MS - (now - lastSubmitTime.current)) / 1000)
      setError(`אנא המתן ${secondsLeft} שניות לפני שליחה נוספת.`)
      return
    }

    // Client-side validation
    if (!formData.name.trim()) {
      setError('אנא הזן שם מלא.')
      return
    }
    if (!isValidPhone(formData.phone)) {
      setError('מספר הטלפון אינו תקין.')
      return
    }
    if (!isValidEmail(formData.email)) {
      setError('כתובת האימייל אינה תקינה.')
      return
    }

    setLoading(true)
    lastSubmitTime.current = Date.now()

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE',
          subject: `פנייה חדשה מהאתר: ${formData.subject || formData.name}`,
          from_name: formData.name,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          topic: formData.subject,
          message: formData.message || '(ללא הודעה)',
          botcheck: '',
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
      } else {
        throw new Error(data.message || 'שגיאה בשליחה')
      }
    } catch (err) {
      console.error('Form error:', err)
      setError('שגיאה בשליחת ההודעה. אנא נסה שוב או צור קשר ישירות בטלפון.')
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'טלפון',
      value: '054-599-1028',
      href: 'tel:+972545991028',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'כתובת',
      value: 'דרך המשי 10, גני תקווה',
      href: 'https://maps.google.com/?q=דרך+המשי+10+גני+תקווה',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'שעות פעילות',
      value: "א'-ה' 09:00-19:00 | שישי 08:00-14:00",
      href: null,
    },
  ]

  return (
    <div dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-6">
            צור קשר
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            בואו נדבר
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            מלא/י את הטופס למטה, וניצור איתך קשר בהקדם.
            פגישת היכרות ראשונה חינם ללא התחייבות.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">שלח/י הודעה</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">ההודעה נשלחה בהצלחה!</h3>
                  <p className="text-green-700">
                    תודה על פנייתך. אחזור אליך בהקדם האפשרי.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', subject: '', message: '' }) }}
                    className="mt-6 btn-primary"
                  >
                    שלח/י הודעה נוספת
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot for spam */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        שם מלא *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="ישראל ישראלי"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        טלפון *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="054-000-0000"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      אימייל
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      מידע על הפגישה
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                    >
                      <option value="">בחר/י נושא...</option>
                      <option value="העצמה אישית">העצמה אישית</option>
                      <option value="חרדות מטיסה">חרדות מטיסה</option>
                      <option value="טיפול בחרם חברתי">טיפול בחרם חברתי</option>
                      <option value="טיפול בחרדות ילדים">טיפול בחרדות ילדים</option>
                      <option value="הרזייה דרך הראש">הרזייה דרך הראש</option>
                      <option value="אימון לקריירה">אימון לקריירה</option>
                      <option value="התקפי זעם בזוגיות">התקפי זעם בזוגיות</option>
                      <option value="טיפול באכילה כפייתית">טיפול באכילה כפייתית</option>
                      <option value="אימון לתקשורת בין אישית">אימון לתקשורת בין אישית</option>
                      <option value="אחר">אחר</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      הודעה
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="ספר/י לי קצת על עצמך ומה אתה/את רוצה לשנות..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed text-lg py-4"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        שולח...
                      </span>
                    ) : (
                      'שלח/י הודעה'
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">פרטים ליצירת קשר</h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{info.label}</div>
                      {info.href ? (
                        <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-gray-900 font-semibold hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-gray-900 font-semibold">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/972545991028"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300 shadow-lg mb-6 text-lg"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                דברו איתי בוואטסאפ
              </a>

              <a
                href="tel:+972545991028"
                className="flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300 shadow-lg text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                054-599-1028
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Free Session Banner */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">פגישת היכרות חינם</h2>
          <p className="text-xl text-white/90">
            30 דקות ללא עלות, ללא התחייבות. בואו נדבר על מה שאתם רוצים לשנות בחייכם.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Contact
