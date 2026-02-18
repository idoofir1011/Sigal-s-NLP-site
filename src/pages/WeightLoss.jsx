import { Link } from 'react-router-dom'

const WeightLoss = () => {
  const dietProblems = [
    {
      num: '01',
      title: 'דיאטה היא תקופה של סבל',
      description: 'לפניה ואחריה אנחנו נאכל יותר כדי לפצות על מה ש"פספסנו". במהלך הדיאטה נרגיש שאנו מונעים מעצמנו הנאות או שנכשלנו במשימה.',
    },
    {
      num: '02',
      title: 'דיאטה יוצרת עיסוק מוגבר באוכל',
      description: 'מתי אוכלים? כמה אוכלים? האם יש לי את המזון הדרוש? כל אלה מגבירים את תחושת הרעב ודוחפים לאכילה חסרת שליטה.',
    },
    {
      num: '03',
      title: 'דיאטה מנתקת מהצרכים האמיתיים',
      description: 'דיאטה מוכתבת מהחוץ — הכמויות ושעות הארוחות אינן מותאמות לצרכים שלכם. התכתיבים החיצוניים מגבירים את תחושת חוסר השליטה.',
    },
  ]

  const nlpVsDiet = [
    { label: 'דיאטה רגילה', items: ['ספירת קלוריות ותפריטים נוקשים', 'ויתור על מאכלים אהובים', 'עיסוק מתמיד באוכל', 'ירידה ועלייה חוזרת במשקל', 'תחושת כישלון מתמדת'], bad: true },
    { label: 'הרזייה דרך הראש NLP', items: ['ללא תפריטים וספירת קלוריות', 'אוכלים את מה שאוהבים — בכמות הנכונה', 'ניתוק ההקשר הרגשי לאוכל', 'שמירה על המשקל לאורך זמן', 'שינוי תודעתי עמוק ומתמשך'], bad: false },
  ]

  const faqs = [
    {
      q: 'כמה פגישות NLP נדרשות לירידה במשקל?',
      a: 'ברוב המקרים, 4-8 פגישות ממוקדות מספיקות לשינוי משמעותי. כמו בסיפורה של ר׳, שב-6 מפגשים עברה שינוי תודעתי שהוביל לירידה במשקל ולשמירה עליו לאורך זמן.',
    },
    {
      q: 'האם אצטרך לוותר על מאכלים שאני אוהב/ת?',
      a: 'לא! זה בדיוק ההבדל. שיטת NLP אינה בונה תפריטים ואינה אוסרת מאכלים. היא מחברת אתכם מחדש לאינסטינקט הטבעי של רעב ושובע, כך שתאכלו את מה שאתם אוהבים — בדיוק בכמות שהגוף צריך.',
    },
    {
      q: 'מה זה אכילה רגשית ואיך NLP מטפל בה?',
      a: 'אכילה רגשית היא שימוש באוכל כפיצוי על רגשות — עצב, תסכול, שעמום, חגיגה. NLP מאתר את הרגעים שבהם אבדתם קשר לתחושת הרעב הפיזיולוגי ומחבר אתכם לתחושות מעצימות שאינן תלויות באוכל.',
    },
    {
      q: 'האם השינוי מתמשך לאורך זמן?',
      a: 'כן. בשונה מדיאטות שמוכתבות מהחוץ, שיטת NLP יוצרת שינוי תודעתי עמוק שהופך להיות חלק מכם. ר׳ נתקלה בסיגל חצי שנה אחרי הטיפול — והשינוי היה ניכר עוד מרחוק.',
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
                הרזייה דרך הראש
                <span className="text-primary block mt-1">אימון תזונה בשיטת NLP</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                זה הזמן להפסיק עם הדיאטות ולהתחיל להרזות! שיטת NLP מחברת אתכם מחדש לאינסטינקט
                הבריא שלכם — כדי שתאכלו את הכמות המתאימה לכם בדיוק ותשמרו על משקל אידאלי ללא מאמץ.
              </p>
              <Link to="/contact" className="btn-primary text-lg">
                לשיחת ייעוץ חינם
              </Link>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 flex items-center justify-center w-full max-h-96">
                <span className="text-9xl">🥗</span>
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
              {[
                'מרגישים שאתם נאבקים בכל פעם שאתם עושים דיאטה?',
                'גם אתם מוותרים על דברים שאתם אוהבים בשביל לרדת במשקל?',
                'בכל פעם אחרי שסיימתם את הדיאטה אתם עולים אפילו יותר?',
                'האוכל הפך לאויב שאתם תמיד מפסידים לו?',
              ].map((q, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-0.5">✦</span>
                  <p className="text-gray-700 text-lg">{q}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-lg mt-6 font-semibold">
              אפשר להרזות בקלות ללא דיאטה ותרופות — ולשמור על המשקל לאורך זמן!
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
            <h3 className="text-xl font-bold text-gray-900 mb-4">הסיפור של ר׳ — איך יורדים במשקל בשיטת NLP</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              "אם תעזרי לי לרדת במשקל, זאת לא תהיה חכמה כזאת גדולה. עשיתי את זה כבר אלף פעם ועם אלף דיאטות שונות.
              אבל אם יש לך שיטה שתעזור לי לשמור על המשקל אחרי שירדתי, אז את כבר קוסמת!"
              ר׳ אמרה לי, עם חיוך מובס של חיילת למודת קרבות.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              "כשאני עצובה אני אוכלת. כשאני מתוסכלת אני אוכלת. אני אוכלת כדי לחגוג הצלחות וכדי להתאבל על כישלונות."
              ב-6 מפגשים מרתקים גילינו שמאז השירות הצבאי שלה, ר׳ הפכה את משקל גופה לשכבת הגנה מפני פגיעות רגשיות.
              האוכל הפך למקום מפלט מפני כאב, בדידות ושעמום.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              כעבור חצי שנה נתקלתי בר׳ ברחוב. השינוי המחשבתי הוביל לירידה במשקל — אפשר היה לראות את זה עוד מרחוק.
              "השינוי שעשיתי בזכותך הוא כל כך גדול! זה לא רק המשקל שהשתנה — זה הכל! זה איך שאני חושבת על אוכל,
              זה איך שאני חושבת על עצמי!"
            </p>
            <div className="mt-6 bg-primary/5 rounded-2xl p-4">
              <p className="text-gray-700 italic text-lg">
                "קשה לתאר במילים את השינוי שהילדה שלי עברה בזכותך. זה מדהים ומרגש והכל בזכותך 🙂 תודה לך מעומק הלב ❤"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">איך יורדים במשקל בקלות?</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  כולנו נולדנו עם אינסטינקטים טבעיים של רעב ושובע שנהרסו לאורך השנים.
                  כבר מזמן שאנחנו לא אוכלים מכיוון שאנחנו רעבים, אלא כתחליף לצרכים רגשיים אחרים.
                </p>
                <p>
                  בשיטת NLP אחבר אתכם חזרה לאינסטינקט הטבעי שלכם ולמקורות הכוח שלכם,
                  שיאפשרו לכם לאכול בדיוק כמה שאתם צריכים — מבלי להשתמש באוכל כתחליף וכפיצוי.
                </p>
                <p>
                  בשונה מרוב סוגי הדיאטות, שיטת NLP יוצרת שינוי תודעתי עמוק שהופך להיות חלק מכם
                  ואינו מוכתב לכם באופן מלאכותי מהחוץ.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">מה הופך את השיטה לפשוטה?</h3>
              <div className="space-y-4">
                {[
                  { icon: '🍽️', text: 'אוכלים רק כשרעבים — מפסיקים כששבעים' },
                  { icon: '🚫', text: 'ללא תפריטים, ללא ספירת קלוריות' },
                  { icon: '❤️', text: 'ללא ויתור על מאכלים אהובים' },
                  { icon: '🧠', text: 'שינוי הדרך שבה חושבים על אוכל' },
                  { icon: '⚡', text: 'ניתוק ההקשר הרגשי לאכילה' },
                  { icon: '✅', text: 'שמירה על המשקל לאורך שנים' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <p className="text-gray-700 font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Diets Fail */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">למה דיאטות לא עובדות?</h2>
          <p className="section-subtitle text-center mb-12">
            3 הסיבות העיקריות שבגללן אנחנו נכשלים כשאנחנו עושים דיאטה
          </p>
          <div className="space-y-6">
            {dietProblems.map((problem, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm">
                <span className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold shrink-0">
                  {problem.num}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{problem.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NLP vs Diet Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-10">NLP לעומת דיאטה רגילה</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nlpVsDiet.map((col, i) => (
              <div key={i} className={`bg-white rounded-2xl p-6 shadow-sm ${col.bad ? '' : 'border-2 border-primary'}`}>
                <h3 className={`text-lg font-bold mb-4 ${col.bad ? 'text-gray-500' : 'text-primary'}`}>{col.label}</h3>
                <ul className="space-y-3">
                  {col.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700">
                      <span className={col.bad ? 'text-gray-400' : 'text-primary font-bold'}>
                        {col.bad ? '✗' : '✓'}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional Eating */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-10">מה זה אכילה רגשית?</h2>
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              כבר מזמן שהאוכל שאנחנו אוכלים איבד את התפקיד הפיזיולוגי שלו — כדלק שמייצר אנרגיה לגוף —
              והפך עבור רבים מאתנו לפיצוי ותחליף רגשי לאינסוף דברים.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {['עצב', 'תסכול', 'שעמום', 'חגיגה'].map((emotion, i) => (
                <div key={i} className="bg-primary/5 rounded-xl p-4 text-center">
                  <p className="font-bold text-primary">{emotion}</p>
                  <p className="text-gray-500 text-sm mt-1">→ אוכלים</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-lg leading-relaxed font-semibold">
              הגיע הזמן שנקטע את ההקשר הרגשי לאוכל ונחזיר אותו למקומו הטבעי!
            </p>
            <div className="mt-6 text-center">
              <Link to="/contact" className="btn-primary">
                לשיחת ייעוץ חינם
              </Link>
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
            מפסיקים עם הדיאטות ומתחילים להרזות!
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

export default WeightLoss
