import { Link } from 'react-router-dom'

const CareerCoaching = () => {
  const challenges = [
    'רוצים לשנות עיסוק אך חוששים כי אינכם יודעים איך לעבור ראיון עבודה?',
    'מרגישים שהפוטנציאל שלכם במקום העבודה לא ממומש, ושיכולתם לעשות הרבה יותר?',
    'עובדים כבר שנים באותה משכורת, אבל לא מצליחים להבין איך לבקש העלאה בשכר?',
    'סובלים מתסמונת המתחזה, חוסר ביטחון עצמי, שחיקה או לחץ בלתי פוסק בעבודה?',
  ]

  const nlpTools = [
    {
      title: 'זיהוי ערכים ושאיפות',
      description: 'מיפוי מה שחשוב לכם באמת בקריירה, זיהוי מה מעכב אתכם בקבלת החלטות ופירוק אמונות מגבילות.',
    },
    {
      title: 'בניית ביטחון עצמי',
      description: 'פיתוח דימוי עצמי חזק, שליטה בשפת הגוף ותקשורת אפקטיבית — כלים קריטיים לראיונות עבודה ולהצגה עצמית.',
    },
    {
      title: 'פריצת חסמים',
      description: 'זיהוי מקור החסמים שמונעים התקדמות, שינוי הדיאלוג הפנימי והתמודדות בטוחה עם אתגרים מקצועיים.',
    },
    {
      title: 'קבלת החלטות מודעת',
      description: 'כלים מעשיים לדמות את השפעת כל החלטה על חייכם המקצועיים והאישיים לפני שמבצעים אותה.',
    },
    {
      title: 'הפחתת לחצים בעבודה',
      description: 'שינוי דפוסי חשיבה שליליים, השתחררות מהשפעות הלחץ והגעה לתחושת העצמה אישית שאינה תלויה בתנאים חיצוניים.',
    },
    {
      title: 'יצירת קשרים מקצועיים',
      description: 'כלים ליצירת רושם חיובי, בניית אמון הדדי בזמן קצר וניהול משא ומתן אפקטיבי שמשפיע על תהליכים מקצועיים.',
    },
  ]

  const benefits = [
    { icon: '🎯', title: 'מיקוד במטרות', description: 'הגדרת יעדים ברורים והשגתם בצורה שיטתית ומדויקת' },
    { icon: '💪', title: 'ביטחון עצמי', description: 'פיתוח ביטחון שאינו תלוי בהצלחות חיצוניות' },
    { icon: '🔓', title: 'פריצת חסמים', description: 'שחרור מאמונות מגבילות שמונעות התקדמות' },
    { icon: '⚡', title: 'תוצאות מהירות', description: 'שינוי משמעותי בכמה מפגשים קצרים בלבד' },
  ]

  const faqs = [
    {
      q: 'מה ההבדל בין אימון לקריירה לבין ייעוץ תעסוקתי רגיל?',
      a: 'ייעוץ תעסוקתי מסורתי מתמקד בעיקר בכלים חיצוניים — כתיבת קורות חיים, חיפוש עבודה, הכנה לראיונות. אימון לקריירה בשיטת NLP עובד גם על הממד הפנימי — שינוי דפוסי חשיבה, פריצת חסמים רגשיים ובניית ביטחון עצמי אמיתי. התוצאה היא שינוי עמוק ומתמשך שמשפיע על כל תחומי החיים.',
    },
    {
      q: 'כמה פגישות נדרשות לשינוי משמעותי?',
      a: 'ברוב המקרים, 4-6 פגישות ממוקדות מספיקות לשינוי משמעותי. NLP הוא שיטה קצרת טווח ונקודתית, ולכן ניתן להגיע במהירות לתוצאות ממשיות — בניגוד לתהליכים טיפוליים ארוכים.',
    },
    {
      q: 'האם האימון מתאים גם למי שמרוצה מעבודתו אך רוצה להתקדם?',
      a: 'בהחלט! אימון לקריירה אינו מיועד רק למי שנמצא במשבר. אנשי מקצוע רבים פונים לתהליך כדי לשמור על מיקוד, לשפר יכולות ולהתפתח בכל שלב בסולם הקריירה.',
    },
    {
      q: 'האם ניתן לקבל אימון בזום?',
      a: 'כן! האימון יעיל באותה מידה גם בפגישות זום. הכלים שנלמדים ניתנים לתרגול בכל מקום, ורבים מהמתאמנים מעדיפים את הנוחות של האימון מהבית או מהמשרד.',
    },
  ]

  return (
    <div dir="rtl">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-6">
                תחום טיפול
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                אימון לקריירה
                <span className="text-primary block mt-1">בשיטת NLP</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                אחת התחושות היפות ביותר היא הגשמה עצמית בתחום העיסוק — בעזרת אימון לקריירה
                תיפתח עבורכם הדלת למעיין אינסופי של סיפוק אישי!
              </p>
              <Link to="/contact" className="btn-primary text-lg">
                לשיחת ייעוץ חינם
              </Link>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 flex items-center justify-center w-full max-h-96">
                <span className="text-9xl">💼</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Hook */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">האם זה מוכר לכם?</h2>
            <div className="space-y-4">
              {challenges.map((q, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-0.5">✦</span>
                  <p className="text-gray-700 text-lg">{q}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-lg mt-6 font-semibold">
              אם ענית כן לאחת מהשאלות — יש פתרון. אימון NLP יכול לשנות את זה.
            </p>
            <Link to="/contact" className="inline-block mt-6 btn-primary">
              השאירו פרטים לשיחה קצרה
            </Link>
          </div>
        </div>
      </section>

      {/* What is Career Coaching */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">מהו אימון לקריירה?</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  אימון לקריירה הוא תהליך שמטרתו לזהות את היעדים המרכזיים של האדם בתחום הקריירה
                  ולסייע לו להשיגם באמצעות כלים וטכניקות מעשיות הקשורות לשיפור עצמי ולרפלקציה עצמית.
                </p>
                <p>
                  התהליך כולל הדרכה להכרה במיומנויות המקצועיות, התנסחות מול מעסיקים וחברים לעבודה
                  והכנה לראיונות עבודה — אך החלק העיקרי הוא הנעה להגדרת מטרות והשגתן.
                </p>
                <p>
                  מאמנת קריירה מספקת משוב אובייקטיבי ובלתי מוטה שהופך את התהליך ליעיל יותר
                  בהשוואה למקורות תמיכה אחרים כמו קולגות, חברים או בני משפחה.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">מתי פונים לאימון קריירה?</h3>
              <div className="space-y-4">
                {[
                  { icon: '🚀', text: 'כניסה לשוק העבודה לראשונה' },
                  { icon: '🔄', text: 'שינוי קריירה או מעבר לתחום חדש' },
                  { icon: '📈', text: 'רצון להתקדם ולקבל קידום' },
                  { icon: '💡', text: 'פתיחת עסק עצמאי' },
                  { icon: '🛡️', text: 'התמודדות עם פיטורין' },
                  { icon: '🎯', text: 'שמירה על מיקוד ופיתוח אישי מתמשך' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How NLP Helps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">איך NLP מסייע בקריירה?</h2>
            <p className="section-subtitle">
              שיטת NLP (Neuro-Linguistic Programming) מבוססת על ההבנה שניתן "לתכנת" מחדש את
              דפוסי החשיבה, הרגש והשפה כדי לשפר תוצאות בכל תחום — כולל הקריירה
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nlpTools.map((tool, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">{tool.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-10">סיפור מהשטח</h2>
          <div className="bg-white rounded-3xl p-8 shadow-sm border-r-4 border-primary">
            <h3 className="text-xl font-bold text-gray-900 mb-4">אימון אישי לקריירה של ס׳ — סמנכ״ל בכיר בן 43</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              במהלך הפגישה הראשונה שלי ושל ס׳ — בן 43, סמנכ״ל בכיר בתאגיד לניהול השקעות — לא הפסיק
              הטלפון הנייד שלו מלצלצל. ביקשתי ממנו שיכבה את המכשיר לשעה קלה, אך הוא סירב.
              ״אני מצטער, אני פשוט לא יכול. יש לי עסקה דחופה בטירוף שאני חייב לסגור, ואם אני לא זמין
              אפילו רגע אחד, הכל נופל. זה על הכתפיים שלי.״
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              ניכר לגמרי שמקום העבודה מפעיל עליו לחץ בלתי פרופורציונלי. בנוסף, ס׳ הלין כי למרות כל
              השקעתו, שכרו נמוך ביחס לתפקיד, ושהוא חושש שאם יבקש העלאה — יפוטר מיידית.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              בעזרת אימון לקריירה באמצעות NLP, חקרנו את מהלך חייו של ס׳ והגענו יחד למסקנה כי בשל
              דיסלקציה קשה שאובחנה בגיל 13, התקבעה אצלו מחשבה שגויה שהוא אינו יכול להצליח.
              כשמשתנה התפיסה — מתחילה האמונה וההצלחה.
            </p>
            <div className="mt-6 bg-primary/5 rounded-2xl p-6 border-r-2 border-primary">
              <p className="text-gray-700 text-lg italic">
                ״קיבלו את כל מה שביקשתי ואף יותר! בכל מקרה אני בודק גם אופציות אצל חברות אחרות
                כרגע, למה לא בעצם? 🙂״
              </p>
              <p className="text-primary font-semibold mt-2">— ס׳, סמנכ״ל בכיר</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">למה אימון NLP לקריירה?</h2>
            <p className="section-subtitle">יתרון משמעותי בעולם העבודה התחרותי</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="text-center bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow duration-300">
                <div className="text-5xl mb-4">{b.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NLP vs Traditional */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-10">NLP לעומת ייעוץ קריירה מסורתי</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-500 mb-4">ייעוץ מסורתי</h3>
              <ul className="space-y-3">
                {[
                  'מתמקד בכלים חיצוניים בלבד',
                  'לא מטפל בחסמים רגשיים',
                  'תהליך ארוך ולא ממוקד',
                  'תוצאות לא תמיד מתמשכות',
                  'לא מתמודד עם שורש הבעיה',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <span className="text-gray-400">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-primary">
              <h3 className="text-lg font-bold text-primary mb-4">אימון NLP לקריירה</h3>
              <ul className="space-y-3">
                {[
                  'עובד גם על הממד הפנימי',
                  'פורץ חסמים רגשיים ומחשבתיים',
                  '4-6 פגישות ממוקדות בלבד',
                  'שינוי עמוק ומתמשך',
                  'מטפל בשורש — לא בסימפטומים',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <span className="text-primary font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-10">שאלות נפוצות</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            מוכנים לפרוץ קדימה בקריירה?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            השאירו פרטים ומאסטר NLP סיגל פולוין תספק לכם כלים עוצמתיים שיסייעו לכם לצעוד לעבר שינוי משמעותי
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

export default CareerCoaching
