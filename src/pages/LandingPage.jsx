import { Link } from 'react-router-dom'

const LandingPage = () => {
  const problems = [
    { icon: '😰', text: 'חרדות שמונעות מכם לתפקד בחיי היומיום?' },
    { icon: '🔄', text: 'דפוסי חשיבה שליליים שחוזרים שוב ושוב?' },
    { icon: '🧱', text: 'תחושה שמשהו עוצר אתכם מלהגיע למטרות?' },
    { icon: '😔', text: 'ביטחון עצמי נמוך שמשפיע על כל תחומי החיים?' },
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
              <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-800 font-semibold px-4 py-2 rounded-full text-sm mb-6">
                🏆 מומלצת ערוץ 13 &nbsp;|&nbsp; ⭐ 5.0 · 39 ביקורות גוגל
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
                <span className="text-3xl flex-shrink-0">{p.icon}</span>
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
            <p className="text-gray-500">מבוסס על 39 ביקורות גוגל ⭐ 5.0</p>
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
              <span className="inline-block bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                🏆 מומלצת ערוץ 13
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
