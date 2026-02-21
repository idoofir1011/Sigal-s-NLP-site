import { Link } from 'react-router-dom'

const LandingPage = () => {
  const problems = [
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
        </svg>
      ),
      text: 'חרדות שמונעות מכם לתפקד בחיי היומיום?',
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
          <path d="M21 3v5h-5"/>
          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
          <path d="M8 16H3v5"/>
        </svg>
      ),
      text: 'דפוסי חשיבה שליליים שחוזרים שוב ושוב?',
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      ),
      text: 'תחושה שמשהו עוצר אתכם מלהגיע למטרות?',
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
      ),
      text: 'ביטחון עצמי נמוך שמשפיע על כל תחומי החיים?',
    },
  ]

  const testimonials = [
    {
      name: 'לאה לוי יואש',
      text: 'הגעתי לסיגל מבולבלת ומפוזרת. יצאתי מחדר קסום עם בהירות מלאה. שינוי מדהים שהתחולל בי.',
      stars: 5,
    },
    {
      name: 'שירז קליין',
      text: 'הבן שלי עבר תהליך NLP. כבר במהלך הטיפולים ניתן לראות שיפור אמיתי בביטחון העצמי ובגישה לחיים.',
      stars: 5,
    },
  ]

  return (
    <div dir="rtl" className="min-h-screen bg-white">

      {/* Minimal sticky header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/logo.webp" alt="Sigal NLP" className="h-10 w-auto" />
            <div>
              <div className="text-base font-bold text-primary leading-tight">סיגל פולוין</div>
              <div className="text-xs text-gray-500">מאמנת ומטפלת NLP</div>
            </div>
          </Link>
          <Link to="/contact" className="btn-primary py-2 px-6 text-sm">
            לשיחת ייעוץ חינם
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-6">
                ✦ מאסטר NLP מוסמך
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                הגיע הזמן לשחרר
                <span className="text-primary block mt-1">את מה שמעכב אתכם!</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                בעזרת NLP תשנו דפוסי חשיבה, תשחררו חרדות ותגיעו לגרסה הטובה ביותר שלכם —
                <strong> מהר יותר ממה שאתם מדמיינים.</strong>
              </p>
              <Link to="/contact" className="btn-primary text-lg inline-block">
                לשיחת ייעוץ חינם — בלי התחייבות
              </Link>
              <p className="text-gray-400 text-xs mt-3">
                ✔ שיחה קצרה וחינמית &nbsp;✔ ללא התחייבות &nbsp;✔ מענה תוך 24 שעות
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
                <img
                  src="/images/sigal-profile.webp"
                  alt="סיגל פולוין - מאמנת ומטפלת NLP"
                  className="relative z-10 rounded-3xl shadow-2xl max-h-[460px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">האם אחד מהדברים האלה מוכר לכם?</h2>
          <p className="text-gray-500 mb-10">אם כן — אתם לא לבד, וניתן לשנות את זה.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problems.map((p, i) => (
              <div key={i} className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 text-right border border-gray-100">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {p.icon}
                </div>
                <p className="text-gray-700 font-medium">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-primary/5 rounded-2xl p-6 border border-primary/20">
            <p className="text-gray-700 text-lg leading-relaxed">
              כל המחשבות שלנו מורכבות ממילים. בעזרת NLP אני משנה את המילים הפנימיות —{' '}
              <strong>ואיתן את החיים.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">מה אומרים הלקוחות?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-yellow-400 text-xl mb-3">{'⭐'.repeat(t.stars)}</div>
                <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <span className="font-bold text-gray-900 text-sm">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src="/images/sigal-profile.webp"
              alt="סיגל פולוין"
              loading="lazy"
              className="w-40 h-40 rounded-full object-cover shadow-xl border-4 border-primary/20 flex-shrink-0"
            />
            <div>
              <span className="inline-block bg-primary/10 border border-primary/20 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-3">
                ✦ מאסטר NLP מוסמך
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">סיגל פולוין — מאסטר NLP</h2>
              <p className="text-gray-600 leading-relaxed">
                מאמנת ומטפלת NLP עם ניסיון עשיר בעבודה עם נשים, גברים וילדים.
                לשעבר מנהלת בכירה ויזמית — היום עוזרת לאחרים לפרוץ גבולות ולממש את הפוטנציאל שלהם.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">מוכנים לצעד הראשון?</h2>
          <p className="text-white/85 text-lg mb-8">שיחת ייעוץ חינמית, קצרה וללא התחייבות — בואו נדבר.</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg text-lg"
          >
            לשיחת ייעוץ חינם
          </Link>
          <p className="text-white/60 text-xs mt-4">✔ מענה מהיר &nbsp;✔ ללא לחץ &nbsp;✔ ביטול חופשי</p>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="py-6 bg-gray-900 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} סיגל פולוין — כל הזכויות שמורות
      </footer>
    </div>
  )
}

export default LandingPage
