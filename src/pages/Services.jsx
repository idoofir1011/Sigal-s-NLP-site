import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      icon: '👩',
      title: 'העצמה נשית',
      description: 'פיתוח עוצמה נשית תסייע לך רבות בתחומי החיים. תהליך המיועד להעצמת נשים בהתאמה אישית באמצעות כלי NLP.',
      path: '/empowerment',
    },
    {
      icon: '🧠',
      title: 'העצמה אישית',
      description: 'תהליך אישי מעמיק לגילוי הכוחות הפנימיים שלך, בניית ביטחון עצמי ויצירת חיים מלאי משמעות והגשמה.',
      path: '/personal-empowerment',
    },
    {
      icon: '✈️',
      title: 'חרדות מטיסה',
      description: 'טיפול יעיל וממוקד בחרדות מטיסה באמצעות כלי NLP מתקדמים. חזרו לטוס בחופשיות וללא פחד.',
      path: '/anxiety',
    },
    {
      icon: '👥',
      title: 'טיפול בחרם חברתי',
      description: 'ליווי מקצועי לילדים ומבוגרים המתמודדים עם חרם חברתי. בניית כלים להתמודדות ושיפור מיומנויות חברתיות.',
      path: '/social-bullying',
    },
    {
      icon: '👶',
      title: 'טיפול בחרדות ילדים',
      description: 'גישה ייחודית ומותאמת לילדים לטיפול בחרדות שונות. עבודה בגובה העיניים עם תוצאות מוכחות.',
      path: '/contact',
    },
    {
      icon: '🥗',
      title: 'הרזייה דרך הראש',
      description: 'שינוי דפוסי חשיבה והתנהגות סביב אוכל ואכילה. הרזייה בת-קיימא שמתחילה מהמחשבה.',
      path: '/weight-loss',
    },
    {
      icon: '💼',
      title: 'אימון לקריירה',
      description: 'פיתוח מיומנויות מקצועיות, מנהיגות ותקשורת. קידום הקריירה שלך עם כלים מעשיים ואפקטיביים.',
      path: '/career-coaching',
    },
  ]

  const process = [
    { step: '01', title: 'שיחת ייעוץ', description: 'שיחה ראשונה חינם להכרות ולהבנת הצרכים שלך' },
    { step: '02', title: 'בניית תוכנית', description: 'תוכנית טיפול מותאמת אישית למטרות שלך' },
    { step: '03', title: 'תהליך הטיפול', description: 'פגישות קבועות עם כלי NLP מתקדמים' },
    { step: '04', title: 'שינוי ותוצאות', description: 'שינוי אמיתי ומתמשך ללא "חפירה" בעבר' },
  ]

  return (
    <div dir="rtl">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-6">
            תחומי פעילות
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">במה אני יכולה לעזור לך?</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            יחד נמצא פתרונות לבעיה הספציפית שמטרידה אתכם, בהתאמה ייחודית לצרכים שלכם,
            מבלי "לחפור" בעבר, במהירות וביעילות.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, -1).map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/30 hover:-translate-y-1">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <Link to={service.path} className="text-primary font-semibold hover:underline">
                  לפרטים נוספים ←
                </Link>
              </div>
            ))}
          </div>
          {/* Last item centered */}
          <div className="mt-8 max-w-sm mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/30 hover:-translate-y-1">
              <div className="text-5xl mb-4">{services[services.length - 1].icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{services[services.length - 1].title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{services[services.length - 1].description}</p>
              <Link to={services[services.length - 1].path} className="text-primary font-semibold hover:underline">
                לפרטים נוספים ←
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">איך זה עובד?</h2>
            <p className="section-subtitle">תהליך פשוט וברור מהפגישה הראשונה ועד לשינוי</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 -left-1/2 w-full h-0.5 bg-primary/20"></div>
                )}
                <div className="relative z-10 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">מוכנים להתחיל?</h2>
          <p className="text-xl text-white/90 mb-8">שיחת ייעוץ ראשונה חינם ללא התחייבות</p>
          <Link to="/contact" className="inline-block bg-white text-primary font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg text-lg">
            לשיחת ייעוץ חינם
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
