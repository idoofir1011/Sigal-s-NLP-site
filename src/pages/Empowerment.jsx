import { Link } from 'react-router-dom'

const Empowerment = () => {
  const tips = [
    'הכירי בערך הייחודי שלך',
    'הציבי לעצמך מטרות שאפתניות',
    'טפחי את הביטחון העצמי שלך',
    'הקיפי את עצמך בסביבה חיובית ותומכת',
    'למדי כל הזמן מיומנויות חדשות',
    'אל תפחדי לקחת סיכונים',
    'אל תפחדי להשמיע את קולך',
    'תמכי בנשים אחרות',
    'העניקי לעצמך זמן לטיפוח עצמי',
    'חגגי את ההצלחות שלך',
  ]

  const faqs = [
    {
      q: 'מהי עוצמה נשית?',
      a: 'עוצמה נשית היא מושג המתאר את הכוח הפנימי הקיים בכל אישה, והיא אינה מוגבלת לתחום מסוים בחיים, אלא מתפרשת על פני כל תחומי העניין והעיסוק. עוצמה זו מאפשרת לנשים לקחת שליטה על חייהן, להגשים את מטרותיהן ולממש את הפוטנציאל האישי שלהן.',
    },
    {
      q: 'מדוע חשוב לפתח עוצמה נשית?',
      a: 'פיתוח עוצמה נשית הוא מרכיב חיוני בקידום שוויון מגדרי. כאשר נשים מרגישות חזקות ובטוחות בעצמן, הן מסוגלות להתמודד עם אתגרים ולהשיג את מטרותיהן. עוצמה נשית גם מסייעת לנשים להתמודד עם אפליה, להשמיע את קולן ולתרום באופן משמעותי בכל תחומי החיים.',
    },
    {
      q: 'מהו התהליך לפיתוח עוצמה נשית?',
      a: 'התהליך לפיתוח עוצמה נשית הוא מסע אישי הכולל מספר שלבים: הכרה עצמית, שימוש בטכניקות NLP לשינוי דפוסי חשיבה, הקפת עצמך בסביבה תומכת, ולמידה מתמשכת. גישת ה-NLP מספקת כלים פרקטיים כמו יצירת עוגנים חיוביים, שינוי אמונות מגבילות ושיפור מיומנויות תקשורת.',
    },
    {
      q: 'באילו מצבים עוצמה נשית יכולה לעזור?',
      a: 'עוצמה נשית יכולה לסייע במגוון רחב של מצבים: התמודדות עם אפליה מגדרית במקום העבודה, שיפור הדימוי העצמי והביטחון האישי, התמודדות עם מערכות יחסים לא בריאות, קשיים כלכליים, ועוד. היא מעניקה לנשים את הכוח לקבל החלטות מושכלות ולפעול לשיפור חייהן.',
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
                עוצמה נשית
                <span className="text-primary block mt-1">העצמה אישית לנשים</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                פיתוח עוצמה נשית יסייע לך רבות בתחומי החיים. סיגל פולוין מאסטר NLP מוסמכת,
                מזמינה אותך לתהליך המיועד להעצמת נשים בהתאמה אישית.
              </p>
              <Link to="/contact" className="btn-primary text-lg">
                לשיחת ייעוץ חינם
              </Link>
            </div>
            <div className="relative flex justify-center">
              <img
                src="/images/empowerment.webp"
                alt="העצמה נשית - סיגל פולוין"
                className="rounded-3xl shadow-2xl w-full object-cover max-h-96"
                onError={(e) => { e.target.src = '/images/sigal-profile.webp' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Hook */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">האם את מזדהה עם אחד מאלה?</h2>
            <div className="space-y-4">
              {[
                'גם את מרגישה לעתים קרובות שאם תעלמי לא יחול שום שינוי בעולם?',
                'גם את מרגישה בסחרור של חוסר שליטה על חייך ועל כספך?',
                'גם את רוצה יותר מכל בשיפור חיי הנישואין? רוצה לגלות עוצמה נשית הטבועה בך?',
              ].map((q, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-0.5">✦</span>
                  <p className="text-gray-700 text-lg">{q}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-lg mt-6 font-semibold">
              אם ענית כן לאחד מהשאלות — את במקום הנכון. בואי נדבר.
            </p>
            <Link to="/contact" className="inline-block mt-6 btn-primary">
              השאירי פרטים לשיחה קצרה
            </Link>
          </div>
        </div>
      </section>

      {/* What is Women's Empowerment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-10">מהי עוצמה נשית?</h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              עוצמה נשית היא מושג המתאר את הכוח הפנימי הקיים בכל אישה, והיא אינה מוגבלת לתחום מסוים בחיים,
              אלא מתפרשת על פני כל תחומי העניין והעיסוק. עוצמה זו מאפשרת לנשים לקחת שליטה על חייהן,
              להגשים את מטרותיהן ולממש את הפוטנציאל האישי שלהן.
            </p>
            <p>
              העוצמה הנשית מתמקדת בפיתוח אישי וצמיחה, תוך הכרה בערך הייחודי של כל אישה.
              היא מעודדת נשים לבטא את עצמן, להשמיע את קולן ולהשפיע על העולם הסובב אותן.
              השימוש בביטוי "עוצמה נשית" מדגיש את הפוטנציאל הטמון בכל אישה ואת היכולת שלה להוביל ולעשות שינוי.
            </p>
          </div>
        </div>
      </section>

      {/* NLP for Empowerment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">כיצד NLP מסייע להעצמה נשית?</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  אחד הכלים היעילים בתהליך זה הוא שימוש בטכניקות NLP להעצמה. גישת ה-NLP מספקת
                  כלים פרקטיים לשינוי דפוסי חשיבה והתנהגות, מה שמאפשר לנשים להתגבר על מחסומים
                  פנימיים ולפתח את הפוטנציאל שלהן.
                </p>
                <p>
                  העצמת נשים בעזרת NLP יכולה לכלול טכניקות כמו:
                </p>
                <ul className="space-y-2 mr-4">
                  {['יצירת עוגנים חיוביים', 'שינוי אמונות מגבילות', 'שיפור מיומנויות תקשורת', 'בניית ביטחון עצמי', 'הגדרת מטרות ברורות'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">העלאת ביטחון עצמי</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                ביטחון עצמי הוא מיטיב אתך ועם הסובבים אותך. כאשר את מאמינה בעצמך,
                את מסוגלת להשפיע לטובה על כל מי שסביבך — בבית, בעבודה ובחברה.
              </p>
              <Link to="/contact" className="btn-primary">
                התחילי את המסע שלך
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-10">סיפור מהשטח</h2>
          <div className="bg-white rounded-3xl p-8 shadow-sm border-r-4 border-primary">
            <h3 className="text-xl font-bold text-gray-900 mb-4">התעללות כלכלית - הסיפור של ג׳</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              ג׳, אישה צעירה בת 27, עורכת דין מבטיחה בתחילת הדרך ואם מקסימה לילדה, הגיעה אלי
              כשכבר ניסתה שלל שיטות בניסיון לפתור את הקונפליקטים עם בן הזוג, אך ללא הועיל.
              "אנחנו כל הזמן רק רבים על כסף! הדירה שאנחנו גרים בה שייכת לו, הוא לא משתף אותי
              במידע על תשלומי המשכנתא, לא מוכן להראות לי את החשבונות..."
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              באמצעות תהליך NLP ממוקד, עזרתי לג׳ לגלות את העוצמה הפנימית שלה, לבנות גבולות
              בריאים ולקחת שליטה על חייה מחדש.
            </p>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">טיפים יעילים שיובילו אותך אל העוצמה הנשית</h2>
          <p className="section-subtitle text-center mb-10">
            זיכרו — יישום העצמת נשים בצעדים קטנים, יכול להוביל לשינוי גדול
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tips.map((tip, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  {i + 1}
                </span>
                <span className="text-gray-700 font-medium">{tip}</span>
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
            מוכנה לגלות את העוצמה הנשית שלך?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            השאירי פרטים ובשיחה קצרה אסביר לך מה עושים
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

export default Empowerment
