import { Link } from 'react-router-dom'

const Home = () => {
  const services = [
    { icon: '✈️', title: 'חרדות מטיסה', path: '/services' },
    { icon: '👥', title: 'טיפול בחרם חברתי', path: '/services' },
    { icon: '👶', title: 'טיפול בחרדות ילדים', path: '/services' },
    { icon: '🥗', title: 'הרזייה דרך הראש', path: '/services' },
    { icon: '💼', title: 'אימון לקריירה', path: '/services' },
  ]

  const testimonials = [
    {
      name: 'שירז קליין',
      text: 'סיגל מטפלת מקצועית, רגישה ומלאת אכפתיות. הבן שלי נמצא אצלה בתהליך NLP, וכבר במהלך הטיפולים ניתן לראות שיפור אמיתי – במיוחד בביטחון העצמי, בגישה שלו לעצמו וביכולת להתמודד עם מצבים שהיו מאתגרים עבורו בעבר. סיגל יוצרת תחושת ביטחון, מקשיבה באמת ויודעת לגשת לילדים בגובה העיניים. אנחנו מאוד מרוצים מהתהליך ומהליווי, וממליצים עליה מכל הלב.',
      stars: 5,
    },
    {
      name: 'לאה לוי יואש',
      text: 'הגעתי לסיגל מבולבלת ומפוזרת בחשיבה. נכנסתי לחדר קסום והתיישבתי מול המאמנת המדהימה שעשתה לי סדר בתת מודע ומשם הובילה אותי למקום הכי הכי שלי היום. תודה אלופה על שינוי מדהים שהתחולל בי.',
      stars: 5,
    },
    {
      name: 'עדנה מינץ',
      text: 'לסיגל היקרה - לכל אנחה אוזנך קרויה. להיות מטופל שלך זו חוויה נעימה. הטיפול שאת מגישה ללא רבב. נעימה הליכות בעלת לב של זהב. כזו שניתן לסמוך עליה בכל מצב. בהוקרה.',
      stars: 5,
    },
  ]

  return (
    <div dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-white min-h-[90vh] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Channel 13 Badge */}
              <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-800 font-semibold px-4 py-2 rounded-full text-sm mb-6">
                🏆 גאה להצטרף לרשימת המומלצים של ערוץ 13!
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                הדרך שלכם קיימת
                <span className="text-primary block mt-1">אתם רק צריכים שיכוונו אתכם אליה!</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                נעים מאוד, שמי <strong>סיגל פולוין</strong>, מאסטר NLP ומומחית בשינוי מחשבתי והתנהגותי.
                אני מזמינה אתכם לעשות את השינוי שחיכיתם לו כל כך – כי עכשיו זה הזמן שלכם לפרוץ!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-center text-lg">
                  לשיחת ייעוץ חינם
                </Link>
                <Link to="/about" className="btn-secondary text-center text-lg">
                  קרא עוד עליי
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">39+</div>
                  <div className="text-gray-600 text-sm">ביקורות גוגל</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">⭐ 5.0</div>
                  <div className="text-gray-600 text-sm">דירוג ממוצע</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">NLP</div>
                  <div className="text-gray-600 text-sm">מאסטר מוסמך</div>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
                <img
                  src="/images/sigal-profile.webp"
                  alt="סיגל פולוין - מאמנת ומטפלת NLP"
                  className="relative z-10 rounded-3xl shadow-2xl max-h-[550px] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 z-20">
                  <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
                  <div className="text-sm font-bold text-gray-900 mt-1">מבוסס על 39 ביקורות</div>
                  <div className="text-xs text-gray-500">Google Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">תחומי פעילות</h2>
            <p className="section-subtitle">
              יחד נמצא פתרונות לבעיה הספציפית שמטרידה אתכם, בהתאמה ייחודית לצרכים שלכם
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 auto-rows-fr">
            {/* Empowerment hover-split card */}
            <div className="group relative col-span-2 md:col-span-1 row-span-1">
              {/* Default state */}
              <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 transition-all duration-300 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-4xl mb-3">✨</div>
                <h3 className="text-base font-bold text-gray-900">העצמה</h3>
                <p className="text-xs text-gray-400 mt-1">העבר עכבר לפרטים</p>
              </div>
              {/* Hover state - two sub-cards */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100 flex flex-col gap-2 h-full">
                <Link
                  to="/empowerment"
                  className="flex-1 bg-primary/10 border border-primary/30 rounded-xl p-3 text-center hover:bg-primary/20 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center"
                >
                  <div className="text-2xl mb-1">👩</div>
                  <h3 className="text-sm font-bold text-primary">העצמה נשית</h3>
                </Link>
                <Link
                  to="/personal-empowerment"
                  className="flex-1 bg-secondary/10 border border-secondary/30 rounded-xl p-3 text-center hover:bg-secondary/20 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center"
                >
                  <div className="text-2xl mb-1">🧠</div>
                  <h3 className="text-sm font-bold text-secondary">העצמה אישית</h3>
                </Link>
              </div>
            </div>

            {/* Regular service cards */}
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/30 hover:-translate-y-1 group flex flex-col items-center justify-center"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors">{service.title}</h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              כל תחומי הפעילות
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/images/gallery1.webp"
                alt="סיגל פולוין בפעולה"
                className="rounded-2xl shadow-xl w-full object-cover max-h-96"
              />
            </div>
            <div>
              <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
                מי אני?
              </span>
              <h2 className="section-title">מאסטר NLP ומומחית בשינוי מחשבתי</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                הגעתי אחרי מסע ארוך ומרתק, כמנהלת בכירה בחברות מובילות וכיזמית בעלת עסקים מצליחים,
                מתוך רצון להפוך את הניסיון הרב שצברתי לכלים משמעותיים שאפשר להעניק לאחרים.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                בשנותיי כמאסטר NLP ומאמנת NLP זכיתי לאמן אינספור מקרים של נשים, גברים וילדים,
                שפרצו גבולות, שינו הרגלי חשיבה וגילו שאין גבול להצלחה שלהם.
              </p>
              <Link to="/about" className="btn-primary">
                קרא עוד עליי
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">איך זה בעצם עובד? הכוח של המילים</h2>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              אם תחשבו על זה רגע, תגלו שכל המחשבות שלכם, בלי יוצא מהכלל, מורכבות ממילים.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              אני משתמשת בכוחן של המילים, המרכיבות את המחשבות, ומחברת אותנו בעזרתן לתחושות חיוביות ומעצימות.
              מחשבות ומילים אלו פורצים עבורנו פתח לדרך חדשה של הצלחה ומימוש מקסימלי של היכולות הטמונות בנו.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              <strong>החלומות שלנו משרטטים את הדרך שלנו להגשמה עצמית.</strong>
              האמונה ביכולות שלנו - היא שגורמת לנו לצעוד בבטחה במעלה הדרך הזו!
            </p>
            <div className="text-center">
              <Link to="/contact" className="btn-primary text-lg">
                הקליקו וגלו דרך חדשה
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">קצת מבין לקוחותיי...</h2>
            <p className="section-subtitle">מבוסס על 39 ביקורות גוגל ⭐ 5.0</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="text-yellow-400 text-2xl mb-4">{'⭐'.repeat(testimonial.stars)}</div>
                <p className="text-gray-700 leading-relaxed mb-6 italic text-sm">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">כתבות והמלצות</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src="/images/gallery1.webp" alt="כתבה 1" className="rounded-2xl shadow-md w-full object-cover h-64 hover:shadow-xl transition-shadow" />
            <img src="/images/gallery2.webp" alt="כתבה 2" className="rounded-2xl shadow-md w-full object-cover h-64 hover:shadow-xl transition-shadow" />
            <img src="/images/gallery3.webp" alt="כתבה 3" className="rounded-2xl shadow-md w-full object-cover h-64 hover:shadow-xl transition-shadow" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            מוכנים לעשות שינוי בחיים?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            ליצירת קשר ופרטים נוספים – אני כאן בשבילכם
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg text-lg"
          >
            לשיחת ייעוץ חינם
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
