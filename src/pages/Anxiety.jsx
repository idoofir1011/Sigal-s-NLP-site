import { Link } from 'react-router-dom'

const Anxiety = () => {
  const symptoms = [
    { category: 'פיזיים', items: ['דפיקות לב מואצות', 'הזעה מוגברת', 'רעד בגפיים', 'קשיי נשימה', 'בחילה וסחרחורת', 'לחץ בחזה'] },
    { category: 'רגשיים', items: ['פחד עז ממוות', 'תחושת אובדן שליטה', 'פאניקה', 'חרדה מתמשכת לפני הטיסה', 'תחושת אסון קרב'] },
    { category: 'קוגניטיביים', items: ['מחשבות קטסטרופליות', 'קושי להתרכז', 'דמיון תרחישי כישלון', 'חוסר יכולת להירגע', 'עיסוק אובססיבי בסטטיסטיקות תאונות'] },
  ]

  const causes = [
    { icon: '🧠', title: 'חוויה טראומטית', description: 'טיסה קשה בעבר, טורבולנציה חזקה או אירוע מפחיד שהותיר חותם עמוק בתת-המודע.' },
    { icon: '📺', title: 'חשיפה תקשורתית', description: 'סיקור אינטנסיבי של תאונות מטוסים בתקשורת יוצר תמונה מעוותת של הסיכון האמיתי.' },
    { icon: '🎮', title: 'אובדן שליטה', description: 'הקושי להיות "נוסע" ולא "נהג" — חוסר שליטה על הסיטואציה מעורר חרדה עמוקה.' },
    { icon: '🚪', title: 'קלאוסטרופוביה', description: 'הפחד מהמרחב הסגור של המטוס, מהחוסר יכולת לצאת, מעצים את תחושת הלכידות.' },
  ]

  const nlpTools = [
    { title: 'שינוי דימויים מנטליים', description: 'NLP מאפשר לשנות את האופן שבו המוח "מציג" לעצמו את הטיסה — מתמונה מאיימת לתמונה ניטרלית ואף נעימה.' },
    { title: 'עיגון מצבים חיוביים', description: 'יצירת "עוגנים" — גירויים שמפעילים מצב רגשי רגוע ובטוח — שניתן להפעיל בכל רגע בטיסה.' },
    { title: 'שינוי מסגרת הפרשנות', description: 'למידה לפרש מחדש תחושות גופניות (כמו טורבולנציה) כנורמליות ובטוחות, במקום כסימן לסכנה.' },
    { title: 'ניתוק רגשי מהזיכרון', description: 'טכניקת "מחיקת" הקשר הרגשי בין זיכרון הטיסה המפחידה לבין תגובת הפחד הנוכחית.' },
  ]

  const faqs = [
    {
      q: 'כמה פגישות NLP נדרשות לטיפול בחרדת טיסה?',
      a: 'ברוב המקרים, 3-5 פגישות ממוקדות מספיקות לשינוי משמעותי. חרדת טיסה היא אחד התחומים שבהם NLP מראה תוצאות מהירות במיוחד, שכן מדובר בפחד ספציפי ומוגדר.',
    },
    {
      q: 'האם הטיפול יעיל גם אם לא טסתי שנים?',
      a: 'בהחלט. לעיתים דווקא ההימנעות הממושכת מחזקת את הפחד. NLP עובד ישירות עם הדפוסים הנוירולוגיים שמייצרים את החרדה, ללא תלות בכמה זמן עבר מאז הטיסה האחרונה.',
    },
    {
      q: 'מה ההבדל בין NLP לטיפול CBT בחרדת טיסה?',
      a: 'CBT עובד בעיקר ברמה הקוגניטיבית — שינוי מחשבות. NLP עובד גם ברמה הנוירולוגית — שינוי הדרך שבה המוח מעבד ומאחסן את הפחד. לכן NLP לרוב מהיר יותר ועמוק יותר לסוג זה של פחדים.',
    },
    {
      q: 'האם אפשר לטפל בחרדת טיסה מרחוק (זום)?',
      a: 'כן! הטיפול יעיל באותה מידה גם בפגישות זום. הכלים שנלמדים ניתנים לתרגול בכל מקום, ורבים מהמטופלים מעדיפים את הנוחות של הטיפול מהבית.',
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
                טיפול בחרדת טיסה
                <span className="text-primary block mt-1">בשיטת NLP</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                ההימנעות ממקורות החרדה אינה פתרון. היא דרך עוקפת שמונעת מאיתנו לחוות דברים חדשים,
                לבקר משפחה בחו"ל, לממש הזדמנויות עסקיות — ולחיות חיים מלאים.
              </p>
              <Link to="/contact" className="btn-primary text-lg">
                לשיחת ייעוץ חינם
              </Link>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 flex items-center justify-center w-full max-h-96">
                <span className="text-9xl">✈️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Hook */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">האם זה מוכר לך?</h2>
            <div className="space-y-4">
              {[
                'אתה/את מסרב/ת לטוס לחופשות משפחתיות כי הפחד גדול מדי?',
                'אתה/את מפספס/ת הזדמנויות עסקיות כי הן דורשות טיסה?',
                'השבועות לפני הטיסה הם סיוט של חרדה ומחשבות שחורות?',
                'ניסית הכל — כדורים, אלכוהול, מוזיקה — ושום דבר לא עוזר באמת?',
              ].map((q, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-0.5">✦</span>
                  <p className="text-gray-700 text-lg">{q}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-lg mt-6 font-semibold">
              אם ענית כן לאחת מהשאלות — יש פתרון. NLP יכול לשנות את זה.
            </p>
            <Link to="/contact" className="inline-block mt-6 btn-primary">
              השאר/י פרטים לשיחה קצרה
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-10">סיפור מהשטח</h2>
          <div className="bg-white rounded-3xl p-8 shadow-sm border-r-4 border-primary">
            <h3 className="text-xl font-bold text-gray-900 mb-4">הסיפור של א׳ — מנהל טכנולוגיה בן 41</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              א׳, מנהל טכנולוגיה בן 41, הגיע אלי לאחר שסירב לטוס לחופשה משפחתית לאירופה כבר שלוש שנים ברציפות.
              ילדיו הפסיקו לבקש, אשתו הפסיקה לתכנן — והוא הרגיש אשמה עמוקה שמכרסמת בו.
              "אני יודע שזה לא הגיוני," אמר בפגישה הראשונה, "אבל ברגע שאני חושב על המטוס, הלב שלי מתחיל לדפוק כמו משוגע."
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              לאחר 4 פגישות NLP ממוקדות, א׳ טס לראשונה מזה שנים — הפעם לכנס עסקי בברלין.
              הוא חתם על עסקה משמעותית, וחזר הביתה עם חיוך רחב ותוכניות לחופשה משפחתית בקיץ.
              "לא האמנתי שזה אפשרי בכל כך מעט זמן," כתב לי אחרי הטיסה.
            </p>
          </div>
        </div>
      </section>

      {/* What is NLP for Anxiety */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">כיצד NLP מטפל בחרדת טיסה?</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  NLP (תכנות נוירו-לשוני) הוא שיטת טיפול שעובדת ישירות עם הדרך שבה המוח מעבד מידע
                  ויוצר תגובות רגשיות. חרדת טיסה אינה "בעיה אמיתית" — היא תגובה נלמדת שהמוח
                  מפעיל אוטומטית בתגובה לגירויים מסוימים.
                </p>
                <p>
                  NLP מאפשר לנו לגשת ישירות לתוכנה הזו ולשכתב אותה. במקום לנסות לשכנע את
                  עצמנו שהטיסה בטוחה (מה שהמוח הרגשי מתעלם ממנו), אנחנו משנים את הדפוס
                  הנוירולוגי עצמו שמייצר את הפחד.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">הכלים שנשתמש בהם</h3>
              <div className="space-y-4">
                {nlpTools.map((tool, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">{tool.title}</p>
                      <p className="text-gray-600 text-sm mt-1">{tool.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">תסמיני חרדת טיסה</h2>
          <p className="section-subtitle text-center mb-12">
            חרדת טיסה מתבטאת במגוון תסמינים — פיזיים, רגשיים וקוגניטיביים
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {symptoms.map((group, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-primary mb-4">תסמינים {group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-primary rounded-full shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">מה גורם לחרדת טיסה?</h2>
          <p className="section-subtitle text-center mb-12">
            הבנת השורש מאפשרת טיפול ממוקד ויעיל
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {causes.map((cause, i) => (
              <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-6">
                <span className="text-4xl shrink-0">{cause.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cause.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{cause.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NLP vs Traditional */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-10">NLP לעומת טיפול מסורתי</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-500 mb-4">טיפול מסורתי</h3>
              <ul className="space-y-3">
                {[
                  'תהליך ארוך של חודשים ושנים',
                  'חשיפה הדרגתית מפחידה',
                  'תרופות עם תופעות לוואי',
                  'עוסק בסימפטומים, לא בשורש',
                  'תוצאות לא תמיד מתמשכות',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <span className="text-gray-400">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-primary">
              <h3 className="text-lg font-bold text-primary mb-4">טיפול NLP</h3>
              <ul className="space-y-3">
                {[
                  '3-5 פגישות ממוקדות בלבד',
                  'ללא חשיפה מפחידה',
                  'ללא תרופות — שינוי טבעי',
                  'מטפל בשורש הנוירולוגי',
                  'שינוי עמוק ומתמשך',
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
            מוכן/ה לטוס שוב בחופשיות?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            השאר/י פרטים ובשיחה קצרה אסביר לך מה עושים
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

export default Anxiety
