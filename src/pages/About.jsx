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

      {/* המלצות וכתבות Section */}
      <section id="המלצות-וכתבות" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-14">
            <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
              מה אומרים עלינו
            </span>
            <h2 className="section-title">המלצות וכתבות</h2>
            <p className="section-subtitle">לקוחות מרוצים וכתבות בתקשורת</p>
          </div>

          {/* Google Rating Banner */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-8 py-4 shadow-sm">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">4.5</div>
                <div className="text-yellow-400 text-xl">★★★★½</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <div className="font-semibold text-gray-800">סיגל NLP</div>
                <div className="text-sm text-gray-500">מבוסס על 39 ביקורות</div>
                <div className="text-xs text-gray-400">powered by Google</div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">💬 המלצות לקוחות</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Testimonial 1 - שירז קליין */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 shadow-sm border border-primary/10 flex flex-col">
                <div className="text-4xl text-primary/30 font-serif leading-none mb-3">"</div>
                <p className="text-gray-700 text-base leading-relaxed flex-1">
                  סיגל מטפלת מקצועית, רגישה ומלאת אכפתיות. הבן שלי נמצא אצלה בתהליך NLP, וכבר במהלך הטיפולים ניתן לראות שיפור אמיתי – במיוחד בביטחון העצמי, בגישה שלו לעצמו וביכולת להתמודד עם מצבים שהיו מאתגרים עבורו בעבר. סיגל יוצרת תחושת ביטחון, מקשיבה באמת ויודעת לגשת לילדים בגובה העיניים. אנחנו מאוד מרוצים מהתהליך ומהליווי, וממליצים עליה מכל הלב.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">ש</div>
                  <div>
                    <div className="font-semibold text-gray-900">שירז קליין</div>
                    <div className="text-sm text-gray-500">לפני חודש</div>
                  </div>
                  <div className="mr-auto text-yellow-400 text-lg">★★★★★</div>
                </div>
              </div>

              {/* Testimonial 2 - אלין זהבי */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 shadow-sm border border-primary/10 flex flex-col">
                <div className="text-4xl text-primary/30 font-serif leading-none mb-3">"</div>
                <p className="text-gray-700 text-base leading-relaxed flex-1">
                  הגעתי לסיגל בתקופה לא פשוטה, כשהייתי מבולבלת וחיפשתי כיוון. כבר בפגישה הראשונה הרגשתי שיש מולי אישה חמה, קשובה ומקצועית שמסתכלת עליי באמת. לא האמנתי שבחמישה מפגשים אפשר לעשות כזה שינוי מטורף. ממליצה מכל הלב לכל מי שמרגיש תקוע או מבולבל. אני בן אדם חדש בזכותה 🙂
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-lg">א</div>
                  <div>
                    <div className="font-semibold text-gray-900">אלין זהבי</div>
                    <div className="text-sm text-gray-500">לפני חודשיים</div>
                  </div>
                  <div className="mr-auto text-yellow-400 text-lg">★★★★★</div>
                </div>
              </div>

              {/* Testimonial 3 - kerenmashiach */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 shadow-sm border border-primary/10 flex flex-col">
                <div className="text-4xl text-primary/30 font-serif leading-none mb-3">"</div>
                <p className="text-gray-700 text-base leading-relaxed flex-1">
                  רוצה לפרגן לסיגל "הקוסמת" הפרטית שלנו על עבודה מדהימה ותוצאות תוך מספר שבועות בלבד. סיגל קשובה לצרכים של הילד, יודעת לשאול את השאלות הנכונות ונותנת כלים להתמודד ולהיות אמיצים לעשות שינוי. אנחנו כבר שנתיים איתה, בקשיים שונים ומגוונים 🙂 אני ממליצה בחום, סיגל אין עלייך ❤️
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-lg">כ</div>
                  <div>
                    <div className="font-semibold text-gray-900">קרן משיח</div>
                    <div className="text-sm text-gray-500">לפני 3 חודשים</div>
                  </div>
                  <div className="mr-auto text-yellow-400 text-lg">★★★★★</div>
                </div>
              </div>

              {/* Testimonial 4 - ליאת וגיא */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 shadow-sm border border-primary/10 flex flex-col">
                <div className="text-4xl text-primary/30 font-serif leading-none mb-3">"</div>
                <p className="text-gray-700 text-base leading-relaxed flex-1">
                  הגעתי אל סיגל עם בני לטיפול בשיטת NLP שלמען האמת לא היה לי מושג מה זה ובאופן כללי הייתי סקפטית מאוד. שלושה מפגשים מאוד עוצמתיים שנתנו כלים ובטחון. היום הילד כבר הולך לחברים עם כלבים ואפילו נינוח בביקורים אצל אחי שיש לו כלבה ענקית. סיגל תודה ענקית על הכל! את מקצועית ומהממת.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">ל</div>
                  <div>
                    <div className="font-semibold text-gray-900">ליאת וגיא מ.</div>
                    <div className="text-sm text-gray-500"></div>
                  </div>
                  <div className="mr-auto text-yellow-400 text-lg">★★★★★</div>
                </div>
              </div>

              {/* Testimonial 5 - סיוון */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 shadow-sm border border-primary/10 flex flex-col">
                <div className="text-4xl text-primary/30 font-serif leading-none mb-3">"</div>
                <p className="text-gray-700 text-base leading-relaxed flex-1">
                  כבר במפגש הראשון סיגל גרמה לי להרגיש שהגעתי למקום הנכון. הגעתי אליה בתקופה קשה ומבולבלת וכבר אחרי המפגש הראשון הרגשתי שינוי עצום. האנרגיות המדהימות של סיגל והמקצועניות שלה עזרו לי ליצור את השינוי באופן מיידי, מה שלא הצלחתי לעשות במשך שנים. סיגל היקרה, נתת לי את הכלים הנכונים ומאז השמיים הם רק קו ההתחלה! 😉
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-lg">ס</div>
                  <div>
                    <div className="font-semibold text-gray-900">סיוון א.</div>
                    <div className="text-sm text-gray-500"></div>
                  </div>
                  <div className="mr-auto text-yellow-400 text-lg">★★★★★</div>
                </div>
              </div>

              {/* Testimonial 6 - רונן הודו */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 shadow-sm border border-primary/10 flex flex-col">
                <div className="text-4xl text-primary/30 font-serif leading-none mb-3">"</div>
                <p className="text-gray-700 text-base leading-relaxed flex-1">
                  סיגל היקרה, תודה רבה על השינוי שעשית לבננו יאיר. תקופה ארוכה של מספר שנים שיאיר חש בפחדים מה שמקשה עליו לישון. את מדהימה! הצלחת במספר מפגשים לשנות קודם כל את איכות החיים של יאיר וכמובן שלנו ההורים – והכל בשיחות זום להודו. יאיר ישן לבד, לא מפחד, הביטחון העצמי שלו עלה. תודה רבה 🌸🌸🌸
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-lg">ר</div>
                  <div>
                    <div className="font-semibold text-gray-900">רונן</div>
                    <div className="text-sm text-gray-500">הודו</div>
                  </div>
                  <div className="mr-auto text-yellow-400 text-lg">★★★★★</div>
                </div>
              </div>

              {/* Testimonial 7 - אילנית */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 shadow-sm border border-primary/10 flex flex-col">
                <div className="text-4xl text-primary/30 font-serif leading-none mb-3">"</div>
                <p className="text-gray-700 text-base leading-relaxed flex-1">
                  את נכנסת לחיי כמו רוח סערה, כמו מלאך, כמו קרן אור והעפת לי מחסומים עמוקים שישבו עלי שנים ועצרו אותי מלהתקדם לעבר המטרות והשליחות שלי בחיים האלה. בזכותך קרו לי דברים משמעותיים בחיים! מה שאת עושה זו שליחות רבת עוצמה שעוזרת לנשמות לצמוח, לפרוח ולשגשג. 🌸
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">א</div>
                  <div>
                    <div className="font-semibold text-gray-900">אילנית ז.</div>
                    <div className="text-sm text-gray-500"></div>
                  </div>
                  <div className="mr-auto text-yellow-400 text-lg">★★★★★</div>
                </div>
              </div>

              {/* Testimonial 8 - יובל */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 shadow-sm border border-primary/10 flex flex-col">
                <div className="text-4xl text-primary/30 font-serif leading-none mb-3">"</div>
                <p className="text-gray-700 text-base leading-relaxed flex-1">
                  דבר ראשון ובולט שראיתי ברגע שנפתחה הדלת לביתה של סיגל, הוא החיוך הענק והמזמין שבו היא קיבלה אותי. קליניקה באווירה חמה ומרגיעה. כיוון שאני למדתי NLP, ראיתי שמדובר במטפלת מקצועית ובקיאה היטב בשיטות. הערך המוסף שראיתי בטיפול הוא האכפתיות הבלתי נגמרת בין הטיפולים וגם לאחריהם. המון תודה!
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-lg">י</div>
                  <div>
                    <div className="font-semibold text-gray-900">יובל ע.</div>
                    <div className="text-sm text-gray-500"></div>
                  </div>
                  <div className="mr-auto text-yellow-400 text-lg">★★★★★</div>
                </div>
              </div>

              {/* Testimonial 9 - אבי */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 shadow-sm border border-primary/10 flex flex-col">
                <div className="text-4xl text-primary/30 font-serif leading-none mb-3">"</div>
                <p className="text-gray-700 text-base leading-relaxed flex-1">
                  סיגל היקרה, הגעתי אלייך בתקופת משבר גם אישי וגם זוגי. קיבלת אותי ללא שהות. הקשבת, הרגעת, הנחית אותי לגבי מהות הטיפולים. הטיפול שלך היה מקצועי ויחד עם זאת גילית רגישות. כיום אחרי כמה חודשים יכול להגיד שהחזרת הן את היציבות האישית והן את היציבות המשפחתית. מודה לך מקרב לב על הטיפול המסור, הזמינות וההקשבה.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-lg">א</div>
                  <div>
                    <div className="font-semibold text-gray-900">אבי ג.</div>
                    <div className="text-sm text-gray-500"></div>
                  </div>
                  <div className="mr-auto text-yellow-400 text-lg">★★★★★</div>
                </div>
              </div>

            </div>
          </div>

          {/* Media Coverage */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">📰 כתבות בתקשורת</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer">
                <img
                  src="/images/gallery1.webp"
                  alt="כתבה 1"
                  className="w-full object-cover h-64 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold text-sm">לצפייה בכתבה</span>
                </div>
                <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                  🏆 ערוץ 13
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer">
                <img
                  src="/images/gallery2.webp"
                  alt="כתבה 2"
                  className="w-full object-cover h-64 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold text-sm">לצפייה בכתבה</span>
                </div>
                <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                  📺 כתבה
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer">
                <img
                  src="/images/gallery3.webp"
                  alt="כתבה 3"
                  className="w-full object-cover h-64 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold text-sm">לצפייה בכתבה</span>
                </div>
                <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                  📺 כתבה
                </div>
              </div>
            </div>
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
