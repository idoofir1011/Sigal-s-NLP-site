import { Link } from 'react-router-dom'

const PersonalEmpowerment = () => {
  const benefits = [
    'שיפור הביטחון העצמי וההערכה העצמית',
    'שיפור יכולת קבלת החלטות מושכלות',
    'פיתוח חוסן נפשי להתמודדות עם אתגרים',
    'האצת צמיחה אישית והגשמה עצמית',
    'שיפור מערכות יחסים ויצירת קשרים יציבים יותר',
  ]

  const obstacles = [
    'ספק עצמי ופחד מכישלון',
    'מגבלות כלכליות ומערכות יחסים לא תומכות',
    'חוויות עבר שליליות וטראומות',
    'ציפיות חברתיות ונורמות מגבילות',
    'תחושת מתח כרוני וחרדה',
    'אמונות מגבילות ודחיינות',
  ]

  const steps = [
    { title: 'לקיחת אחריות אישית ומודעות עצמית', desc: 'הכרה בכך שאנו אחראים על חיינו ועל הבחירות שלנו, הבנת החוזקות והחולשות, הערכים והמטרות שלנו.' },
    { title: 'זיהוי אמונות מגבילות וניטרולן', desc: 'זיהוי מחשבות שליליות שמעכבות אותנו, ערעור עליהן והחלפתן באמונות חיוביות ומעצימות.' },
    { title: 'הצבת מטרות ויעדים ברורים ומשמעותיים', desc: 'הגדרת מטרות בצורה ספציפית, מדידה, ניתנת להשגה, רלוונטית ותחומה בזמן.' },
    { title: 'יצירת תוכנית פעולה וחלוקת מטרות לצעדים קטנים', desc: 'תוכנית פעולה עוזרת להישאר ממוקדים ומאורגנים ולעקוב אחר ההתקדמות.' },
    { title: 'פיתוח הרגלים בריאים ותחזוקת רווחה אישית', desc: 'טיפול עצמי בבריאות הפיזית, הנפשית והרגשית — אכילה טובה, שינה מספקת ופעילות גופנית.' },
    { title: 'חיפוש תמיכה ומשוב מאחרים', desc: 'תמיכה מחברים, משפחה או אנשי מקצוע ומשוב שמספק נקודות מבט חדשות.' },
    { title: 'רפלקציה והתאמה מתמדת של התהליך', desc: 'הקדשת זמן לחשוב על ההתקדמות, האתגרים ומה שלומדים, ונכונות לבצע שינויים.' },
    { title: 'אימוץ למידה מתמשכת וחשיבה של צמיחה', desc: 'פתיחות לרעיונות חדשים, למידה מתמדת וראיית אתגרים כהזדמנויות לצמיחה.' },
  ]

  const tips = [
    { num: 1, title: 'התרחקות מסביבה רעילה', desc: 'זיהוי סביבות שליליות והגדרת גבולות ברורים להפחתת מגע עם אנשים רעילים.' },
    { num: 2, title: 'הקפת עצמך באנשים חיוביים ומעצימים', desc: 'חיפוש אנשים שמאמינים בך, מפרגנים על הצלחותיך ונותנים לך השראה.' },
    { num: 3, title: 'הצבת מטרות קטנות וברות השגה', desc: 'חלוקת מטרות גדולות ליעדים קטנים יותר — כל הצלחה קטנה מדלקת את המוטיבציה.' },
    { num: 4, title: 'תזכורות להצלחות אישיות', desc: 'יצירת רשימת הישגים וחזרה אליה ברגעים של ספק או חוסר ביטחון.' },
    { num: 5, title: 'עבודה על כישורי תקשורת', desc: 'תרגול הקשבה פעילה, הבעת רגשות בצורה ברורה ושימוש בשפת גוף חיובית.' },
    { num: 6, title: 'רכישת מיומנויות חברתיות', desc: 'פיתוח יכולת יצירת שיחה, הקשבה ואמפתיה לשיפור הקשרים החברתיים.' },
    { num: 7, title: 'השתתפות בפעילות משמעותית ותרומה לקהילה', desc: 'עשיית טוב לאחרים מעניקה תחושת סיפוק עצמי ותכלית.' },
    { num: 8, title: 'חזרה על תרגילי העצמה אישית באופן קבוע', desc: 'הקדשת זמן קבוע לתרגול טכניקות לחיזוק הביטחון וההערכה העצמית.' },
    { num: 9, title: 'יצירת תוכנית לעתיד והגדרת יעדים ארוכי טווח', desc: 'הגדרת יעדים בתחומים שונים — קריירה, לימודים, משפחה ותחביבים.' },
    { num: 10, title: 'חקירת הזהות העצמית', desc: 'הקדשת זמן לחשוב על הערכים, האמונות וכל מה שחשוב לך באמת.' },
    { num: 11, title: 'פירגון עצמי על הישגים', desc: 'למידה להעריך את עצמך על המאמצים וההישגים, גם אם הם קטנים.' },
    { num: 12, title: 'שינוי דפוסי חשיבה שליליים', desc: 'זיהוי דפוסי ביקורת עצמית ופסימיות והחלפתם בדפוסים חיוביים ומעודדים.' },
    { num: 13, title: 'יציאה מאזור הנוחות', desc: 'אתגור עצמי ונסיון דברים חדשים — צאו מאזור הנוחות ועשו משהו שמפחיד אתכם.' },
    { num: 14, title: 'לקיחת אחריות על מעשים', desc: 'קחו אחריות על הבחירות שלכם, למדו מטעויות ונסו לעשות טוב יותר בפעם הבאה.' },
    { num: 15, title: 'ניהול זמן יעיל והתמקדות בחוזקות', desc: 'הקדשת רוב הזמן והאנרגיה לדברים שאתם טובים בהם ושאוהבים לעשות.' },
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
                העצמה אישית
                <span className="text-primary block mt-1">מסע לגרסה הטובה ביותר שלך</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                העצמה אישית היא לא רק סיסמה או מונח חולף — היא דרך חיים. זה אומר להכיר בערך הייחודי שלנו,
                לזהות את החוזקות והכישורים שלנו ולהשתמש בהם כדי להגשים את החלומות והמטרות שלנו.
              </p>
              <Link to="/contact" className="btn-primary text-lg">
                לשיחת ייעוץ חינם
              </Link>
            </div>
            <div className="relative flex justify-center">
              <img
                src="/images/sigal-profile.webp"
                alt="העצמה אישית - סיגל פולוין"
                className="rounded-3xl shadow-2xl w-full object-cover max-h-96"
                onError={(e) => { e.target.src = '/images/empowerment.webp' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Hook */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">האם את/ה מזדהה עם אחד מאלה?</h2>
            <div className="space-y-4">
              {[
                'גם אתה מתקפל בכל פעם שאתה נתקל בעימות ולא מצליח לעמוד על שלך?',
                'גם אתם מרגישים שכבר כמה שנים לא התקדמתם לשום מקום?',
                'גם את חלמת שבשלב זה בחייך כבר תהיי במקום אחר מזה שבו את נמצאת?',
              ].map((q, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-0.5">✦</span>
                  <p className="text-gray-700 text-lg">{q}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-lg mt-6 font-semibold">
              אם ענית כן לאחד מהשאלות — את/ה במקום הנכון. בואו נדבר.
            </p>
            <Link to="/contact" className="inline-block mt-6 btn-primary">
              השאירו פרטים לשיחה קצרה
            </Link>
          </div>
        </div>
      </section>

      {/* What is Personal Empowerment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-10">מהי העצמה אישית?</h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              העצמה אישית היא לא רק סיסמה או מונח חולף, היא דרך חיים. זה אומר להכיר בערך הייחודי שלנו,
              לזהות את החוזקות והכישורים שלנו ולהשתמש בהם כדי להגשים את החלומות והמטרות שלנו.
            </p>
            <p>
              העצמה עצמית טומנת בחובה הבנה מעמיקה של עצמנו – מה חשוב לנו, מה מניע אותנו ומהן התשוקות
              האמיתיות שלנו. היא מעודדת אותנו לקבל החלטות מושכלות ולבחור בדרכים שמקדמות אותנו לעבר
              הגרסה הטובה ביותר של עצמנו.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-title">מהם היתרונות המובהקים של העצמה אישית?</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-6">
                <p>
                  העצמה אישית אינה מוגבלת רק להצלחה חיצונית או להישגים חומריים. היא מתמקדת בעיקר
                  בשיפור הפנימי, בחיזוק הביטחון העצמי ובפיתוח תחושת מסוגלות עצמית. כאשר אנחנו חשים
                  מועצמים, אנו מקרינים זאת החוצה ומשפיעים לטובה על הסובבים אותנו.
                </p>
              </div>
              <ul className="space-y-3">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                    <span className="text-gray-700 font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">מה מעכב אנשים מהשגת העצמה אישית?</h3>
              <ul className="space-y-3">
                {obstacles.map((o, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-0.5">✦</span>
                    <span className="text-gray-700">{o}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 mt-6 leading-relaxed">
                כדי להתגבר על מכשולים אלו, חשוב לנטרל אמונות מגבילות ודחיינות ולפתח משמעת עצמית
                כדי להשיג את מטרותינו.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">איך מתבצע תהליך העצמה אישית?</h2>
          <p className="section-subtitle text-center mb-10">
            תהליך ההעצמה האישית הוא מסע אישי ומעמיק הדורש מחויבות, סבלנות ונכונות להתמודד עם אתגרים
          </p>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm">
                <span className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-6">
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              חשוב לזכור כי תהליך של העצמה אישית הוא מסע אישי, ואין דרך אחת נכונה לעשות אותו.
              כל אחד צריך למצוא את הדרך המתאימה לו, ולהתאים את התהליך לצרכים ולמטרות שלו.
            </p>
          </div>
        </div>
      </section>

      {/* 15 Tips */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">15 טיפים מובילים להעצמה אישית</h2>
          <p className="section-subtitle text-center mb-10">
            העצמה אישית היא מסע מתמשך הדורש מאמץ, מודעות עצמית ונכונות לשינוי
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tips.map((tip) => (
              <div key={tip.num} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5">
                <span className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  {tip.num}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-10">סיפור הצלחה — הסיפור של ט׳</h2>
          <div className="bg-white rounded-3xl p-8 shadow-sm border-r-4 border-primary">
            <h3 className="text-xl font-bold text-gray-900 mb-4">העלאת ביטחון עצמי — המפתח להצלחה בכל תחומי החיים</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              ט׳, גבר צעיר ונאה בן 35 שעובד כתקציבאי במשרד פרסום, היה מיואש לחלוטין כשפגשתי אותו לראשונה.
              למרות נוכחותו הנעימה, עמידתו היתה כפופה, דיבורו חלוש, וכל התנהגותו הבהירה כי הוא מתקשה לתפוס
              מקום בחלל. כששאלתי אותו איך הוא היה מגדיר את הבעיה העיקרית שלו, אמר — ״בעיה עיקרית? יש לי כל
              כך הרבה, אני אפילו לא יודע מאיפה להתחיל! בעבודה לא מעריכים אותי ואני עושה את אותו הדבר כבר
              שבע שנים בעוד האנשים שהתחילו בחברה יחד איתי כבר התקדמו מזמן...״
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              על פניו ט׳ נראה כבחור מוצלח ביותר, אך ניכר לגמרי שהוא מתייסר מאוד. היה לי ברור כי ללא מרכז
              פנימי איתן של ביטחון עצמי אותנטי, לעולם לא יוכל ט׳ להגיע לתחושות של סיפוק והגשמה עצמית.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              במהלך פגישתנו הראשונה, איתרתי את העוגנים שעומדים בבסיס הדיבור הפנימי של ט׳. באמצעות שימוש
              במשפטי העצמה אישית ואימון NLP, מוטטתי את הסילופים וההשמטות שהיו נעוצים בדימוי העצמי שלו,
              ושתלתי במקומם תחושות חיוביות המבוססות על חוויות טובות והישגים מוכחים מחייו האישיים.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-10">למה לבחור בי כמאמנת ההעצמה האישית שלכם?</h2>
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              אם אתם מחפשים דרך יעילה וממוקדת להגברת הביטחון העצמי, לשפר את הדימוי העצמי ולהשגת
              מטרותיכם, אימון להגשמה עצמית בגישת ה-NLP יכול להיות הפתרון המושלם עבורכם.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              כמאמנת ומטפלת מוסמכת של הגישה, סיגל פולוין מציעה שירותי אימון אישיים המותאמים לצרכים
              הייחודיים של כל אדם. באמצעות שיטות NLP מתקדמות, אוכל לסייע לכם לזהות ולשנות דפוסי חשיבה
              והתנהגות המעכבים אתכם, ולסלול לכם את הדרך להגשמה עצמית.
            </p>
            <Link to="/contact" className="btn-primary">
              צרו קשר לייעוץ ראשוני
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            מוכנים לגלות את העוצמה הפנימית שלכם?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            השאירו פרטים ובשיחה קצרה אסביר לכם מה עושים — תוך 4 מפגשים*
          </p>
          <p className="text-white/70 text-sm mb-8">*מספר המפגשים משתנה מאדם לאדם, בהתאם לאופי המקרה הספציפי</p>
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

export default PersonalEmpowerment
