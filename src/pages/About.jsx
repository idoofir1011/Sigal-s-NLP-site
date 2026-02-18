import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-6">
                אודות
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                סיגל פולוין
              </h1>
              <p className="text-2xl text-primary font-semibold mb-4">מאמנת ומטפלת NLP | מאסטר NLP</p>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                מומחית בשינוי מחשבתי והתנהגותי, עם ניסיון עשיר בליווי נשים, גברים וילדים לשינוי אמיתי בחייהם.
              </p>
              <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-800 font-semibold px-4 py-2 rounded-full text-sm">
                🏆 מומלצת ערוץ 13
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
                <img
                  src="/images/sigal-profile.webp"
                  alt="סיגל פולוין - מאמנת ומטפלת NLP"
                  className="relative z-10 rounded-3xl shadow-2xl max-h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-10">הסיפור שלי</h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              הגעתי אחרי מסע ארוך ומרתק, כמנהלת בכירה בחברות מובילות וכיזמית בעלת עסקים מצליחים,
              מתוך רצון להפוך את הניסיון הרב שצברתי לכלים משמעותיים שאפשר להעניק לאחרים.
            </p>
            <p>
              בשנותיי כמאסטר NLP ומאמנת NLP זכיתי לאמן אינספור מקרים של נשים, גברים וילדים,
              שפרצו גבולות, שינו הרגלי חשיבה וגילו שאין גבול להצלחה שלהם.
            </p>
            <p>
              אני מזמינה גם אתכם לעשות את השינוי שחיכיתם לו כל כך – כי עכשיו זה הזמן שלכם לפרוץ!
            </p>
            <p>
              יחד נמצא פתרונות לבעיה הספציפית שמטרידה אתכם, בהתאמה ייחודית לצרכים שלכם,
              מבלי "לחפור" בעבר, במהירות וביעילות שתלווה אתכם זמן רב קדימה.
            </p>
          </div>
        </div>
      </section>

      {/* What is NLP Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">מה זה NLP?</h2>
          <p className="section-subtitle text-center">הכוח של המילים</p>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              אם תחשבו על זה רגע, תגלו שכל המחשבות שלכם, בלי יוצא מהכלל, מורכבות ממילים.
              אני משתמשת בכוחן של המילים, המרכיבות את המחשבות, ומחברת אותנו בעזרתן לתחושות חיוביות ומעצימות.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              מחשבות ומילים אלו פורצים עבורנו פתח לדרך חדשה של הצלחה ומימוש מקסימלי של היכולות הטמונות בנו.
              החלומות שלנו משרטטים את הדרך שלנו להגשמה עצמית.
              האמונה ביכולות שלנו - היא שגורמת לנו לצעוד בבטחה במעלה הדרך הזו!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-primary/5 rounded-xl">
                <div className="text-2xl mb-2">🧠</div>
                <div className="font-semibold text-gray-900">Neuro</div>
                <div className="text-gray-600 text-sm">תהליכים נוירולוגיים</div>
              </div>
              <div className="text-center p-4 bg-secondary/5 rounded-xl">
                <div className="text-2xl mb-2">💬</div>
                <div className="font-semibold text-gray-900">Linguistic</div>
                <div className="text-gray-600 text-sm">שפה ותקשורת</div>
              </div>
              <div className="text-center p-4 bg-accent/5 rounded-xl">
                <div className="text-2xl mb-2">⚙️</div>
                <div className="font-semibold text-gray-900">Programming</div>
                <div className="text-gray-600 text-sm">דפוסי התנהגות</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-10">כתבות והמלצות</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src="/images/gallery1.webp" alt="כתבה 1" className="rounded-2xl shadow-md w-full object-cover h-64" />
            <img src="/images/gallery2.webp" alt="כתבה 2" className="rounded-2xl shadow-md w-full object-cover h-64" />
            <img src="/images/gallery3.webp" alt="כתבה 3" className="rounded-2xl shadow-md w-full object-cover h-64" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">רוצים להכיר אותי אישית?</h2>
          <p className="text-xl text-white/90 mb-8">ליצירת קשר ופרטים נוספים</p>
          <Link to="/contact" className="inline-block bg-white text-primary font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg text-lg">
            לשיחת ייעוץ חינם
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
