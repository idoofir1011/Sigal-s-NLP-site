import { Link } from 'react-router-dom'

const SocialBullying = () => {
  const signs = [
    { icon: '🏠', text: 'ילדכם מסתגר בבית ואינו יוצא לפעילויות חברתיות או לחוגים?' },
    { icon: '🏫', text: 'בתכם מסרבת ללכת לבית הספר מדי בוקר וממציאה תירוצים כדי שיאפשרו לה להישאר בבית?' },
    { icon: '😢', text: 'בנכם סיפר שמעליבים אותו בכיתה לעתים קרובות או מתנהגים אליו בבריונות?' },
  ]

  const parentTips = [
    { title: 'שמרו על קור רוח', description: 'קבלו שלא תוכלו לפתור את כל הבעיה לבד. זהו צעד ראשון בהתמודדות יעילה עם המצב.' },
    { title: 'תנו מילים לרגשות', description: 'עזרו לילד לתת מילים לרגשות ולמחשבות ולתקף אותם — מיומנות חשובה לכל החיים.' },
    { title: 'מלאו את החלל החברתי', description: 'פעילויות חברתיות אלטרנטיביות מחוץ למסגרת הכיתה יסייעו לילד ליצור קשרים חדשים.' },
    { title: 'הביעו הבנה ללא רחמים', description: 'הביעו הזדהות, אך הימנעו מרחמים או שיפוטיות. שדרו שאין הצדקה להתעללות החברתית.' },
    { title: 'היזהרו מתגובות אימפולסיביות', description: 'שקלו התייעצות לפני פעולה — תגובה מתוך עלבון אישי עלולה להחמיר את המצב.' },
    { title: 'היו זמינים תמיד', description: 'קשר בטוח בין הורים לילד מספק בסיס להתמודדות עם המשבר, גם אם הילד מתנגד.' },
  ]

  const nlpSteps = [
    { step: '01', title: 'כניסה לחוויית הילד', description: 'הבנת עולמו הפנימי של הילד ואיתור הסיבות שגרמו למצוקה.' },
    { step: '02', title: 'תכנות מחדש של החוויה', description: 'שינוי האופן שבו הילד מפרש את הסביבה ואת עצמו בתוכה.' },
    { step: '03', title: 'עיגון משאבים חיוביים', description: 'חיבור לתחושות הנאה, ביטחון ושמחה שהיו קיימות לפני החרם.' },
    { step: '04', title: 'בניית מרכז פנימי חזק', description: 'פיתוח דימוי עצמי חסין שאינו תלוי ביחס החברתי החיצוני.' },
  ]

  const faqs = [
    {
      q: 'מה ההבדל בין חרם חברתי אצל ילדים למבוגרים?',
      a: 'ילדים ובני נוער פגיעים יותר בשל חוסר ניסיון חיים ומיומנויות בין-אישיות מוגבלות. אצלם, הקבוצה המדירה היא מרכז עולמם החברתי, מה שהופך את הפגיעה לקשה יותר. ילדים חווים חרם עם חרדה, בושה ואשמה, ועלול לגרום לנזק אישיותי עמוק אם לא מטופל כראוי.',
    },
    {
      q: 'מה גורם לחרם קבוצתי בכיתה?',
      a: 'חרם בית ספרי נובע לרוב מקושי תקשורתי בתוך הכיתה. הוא משמש כדרך לנקז תוקפנות קבוצתית באמצעות הכפשה של ילד אחד, ובכך תורם ללכידות הקבוצה. מדובר במנגנון לא-מודע של "שעיר לעזאזל" שבו תכנים רגשיים קשים מועברים כלפי אובייקט חריג בקבוצה.',
    },
    {
      q: 'כמה פגישות NLP נדרשות לטיפול בחרם חברתי?',
      a: 'ברוב המקרים, 3-6 פגישות ממוקדות מספיקות לשינוי משמעותי. כמו בסיפורו של ר׳, כבר לאחר שתי פגישות ניתן לראות שינוי ניכר בהתנהגות ובדימוי העצמי של הילד.',
    },
    {
      q: 'האם ילדים עם ADHD פגיעים יותר לחרם חברתי?',
      a: 'כן. ילדים עם ADHD וקשיי ויסות רגשי פגיעים יותר לדחייה חברתית, ותגובותיהם עזות יותר. תגובתיות רגשית גבוהה זו מקשה עליהם להתמודד עם החרם ועלולה להוביל לקשיים נוספים. טיפול NLP מותאם יכול לסייע במיוחד לאוכלוסייה זו.',
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
                טיפול בחרם חברתי
                <span className="text-primary block mt-1">לילדים ומבוגרים</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                חרם חברתי הוא מצב שבו אדם מנודה מבחינה חברתית על ידי קבוצת השווים שלו.
                הוא יכול להיות גלוי ומוצהר או סמוי ועדין — אך תמיד כואב. עם NLP, ניתן לשנות את זה.
              </p>
              <Link to="/contact" className="btn-primary text-lg">
                לשיחת ייעוץ חינם
              </Link>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 flex items-center justify-center w-full max-h-96">
                <span className="text-9xl">👥</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signs / Emotional Hook */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">האם זה מוכר לכם?</h2>
            <div className="space-y-4">
              {signs.map((sign, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-0.5">✦</span>
                  <p className="text-gray-700 text-lg">{sign.text}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-lg mt-6 font-semibold">
              ישנם אופנים יעילים להתמודדות עם חרם כיתתי. השאירו פרטים ואשמח לעזור.
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
            <h3 className="text-xl font-bold text-gray-900 mb-4">נידוי חברתי וחרם כיתתי — הסיפור של ר׳</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              אביו המיואש של ר׳ פנה אלי בטלפון בעקבות מה שהגדיר כ"התנהגויות מוזרות" שהתחילו להופיע
              אצל בנו בן השמונה. "הוא היה ממש בסדר עד לא מזמן. פעם היו אצלנו תמיד המון חברים,
              ועכשיו זה נפסק. פתאום לפני כמה שבועות שמתי לב שיש לו כל מיני טקסים כפייתיים —
              לנער את הבגדים שלו הרבה מאוד פעמים, לשטוף ידיים אחרי כל דבר שהוא עושה..."
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              בעזרת NLP, גיליתי שחבריו לכיתה כינו את ר׳ "מלוכלך" ו"מסריח", ועל כן ניסה להימנע
              בכל מחיר מהתארים שנקשרו לו. לאחר שתי פגישות בלבד, הסכים ר׳ להסיר את הכפפות מידיו
              ולשבת על הספה בקליניקה. תכנתנו מחדש את חוויית עולמו, עיגנו משאבים חיוביים ובנינו
              מרכז פנימי חזק. לאחר כמה שבועות, ילדי הכיתה ראו שר׳ אדיש לחרם — ומיד חדלו מההקנטות.
            </p>
            <div className="mt-6 bg-primary/5 rounded-2xl p-4">
              <p className="text-gray-700 italic text-lg">
                "קשה לתאר במילים את השינוי שהילדה שלי עברה בזכותך. זה מדהים ומרגש והכל בזכותך 🙂 תודה לך מעומק הלב ❤"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Social Bullying */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">מהו חרם חברתי?</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  חרם חברתי הוא מצב שבו אדם או קבוצת אנשים מנודים מבחינה חברתית על ידי קבוצת השווים שלהם —
                  בין אם זה בכיתה, במקום העבודה, בקהילה או ברשתות החברתיות.
                </p>
                <p>
                  החרם יכול לכלול התעלמות, הדרה מפעילויות חברתיות, הפצת שמועות והשפלה פומבית.
                  הוא מושתת על מנגנון לא-מודע של "שעיר לעזאזל" — כאשר תכנים רגשיים קשים מועברים
                  כלפי אובייקט חריג בקבוצה.
                </p>
                <p>
                  אם בעיית התקשורת הקבוצתית לא נפתרת, החרם עלול להפוך לסימפטום נודד ולפגוע
                  בקורבנות נוספים. התמודדות יעילה דורשת פירוק הבעיה ותקשורת מחודשת בקבוצה.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">כיצד NLP מטפל בחרם?</h3>
              <div className="space-y-4">
                {nlpSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                      {step.step}
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">{step.title}</p>
                      <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Differences */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">חרם חברתי בגילאים שונים</h2>
          <p className="section-subtitle text-center mb-12">
            תופעת החרם אינה ייחודית לשום גיל — אך מקבלת ביטויים שונים
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                age: 'ילדים',
                icon: '👶',
                color: 'border-primary',
                points: [
                  'חווים חרם כהתעלמות שגורמת לתחושת "לא קיים"',
                  'פגיעים יותר בשל חוסר ניסיון חיים',
                  'עלול לגרום לחרדה, בושה ואשמה עמוקה',
                  'ילדים עם ADHD פגיעים במיוחד',
                ],
              },
              {
                age: 'מתבגרים',
                icon: '🧑',
                color: 'border-secondary',
                points: [
                  'הקבוצה החברתית היא מרכז עולמם',
                  'חרם ברשתות החברתיות מחמיר את הפגיעה',
                  'השפעה על זהות ודימוי עצמי מתפתח',
                  'עלול להוביל לדיכאון וחרדה חברתית',
                ],
              },
              {
                age: 'מבוגרים',
                icon: '👨',
                color: 'border-accent',
                points: [
                  'חרם מתוחכם יותר ופחות גלוי',
                  'מתרחש בעיקר במקום העבודה',
                  'השפעה על ביצועים מקצועיים',
                  'קשה יותר לזהות ולהוכיח',
                ],
              },
            ].map((group, i) => (
              <div key={i} className={`bg-white rounded-2xl p-6 shadow-sm border-t-4 ${group.color}`}>
                <div className="text-4xl mb-3 text-center">{group.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{group.age}</h3>
                <ul className="space-y-2">
                  {group.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="w-2 h-2 bg-primary rounded-full shrink-0 mt-1.5"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Tips */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">מה תפקיד ההורים?</h2>
          <p className="section-subtitle text-center mb-10">
            הורים לילד שעובר חרם כיתתי מוצאים עצמם במצוקה קשה — הנה כיצד לעזור
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {parentTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-5">
                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-gray-900 mb-1">{tip.title}</p>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-10">שאלות נפוצות</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
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
            מוכנים לעזור לילדכם לצאת מהחרם?
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

export default SocialBullying
