// Guest data in JSON format
const guests = [
    {
        "שם_פרטי": "ליאם ",
        "שם_משפחה": "אבדלק",
        "שולחן": 35
    },
    {
        "שם_פרטי": "בניה ויעל",
        "שם_משפחה": "אביבי",
        "שולחן": 32
    },
    {
        "שם_פרטי": "נוי",
        "שם_משפחה": "אדלר",
        "שולחן": 21
    },
    {
        "שם_פרטי": "גבי",
        "שם_משפחה": "אדרי",
        "שולחן": 19
    },
    {
        "שם_פרטי": "בר ושלומי",
        "שם_משפחה": "אדרי",
        "שולחן": 32
    },
    {
        "שם_פרטי": "נתנאל",
        "שם_משפחה": "אהרון",
        "שולחן": 10
    },
    {
        "שם_פרטי": "טיגיסט",
        "שם_משפחה": "איוב",
        "שולחן": 21
    },
    {
        "שם_פרטי": "משה וגלית",
        "שם_משפחה": "אילוז",
        "שולחן": 11
    },
    {
        "שם_פרטי": "שאול ורחל",
        "שם_משפחה": "אילוז",
        "שולחן": 11
    },
    {
        "שם_פרטי": "ניצה",
        "שם_משפחה": "אילוז",
        "שולחן": 14
    },
    {
        "שם_פרטי": "אמונה",
        "שם_משפחה": "איצקוביץ",
        "שולחן": 10
    },
    {
        "שם_פרטי": "רענן",
        "שם_משפחה": "אלבוס",
        "שולחן": 10
    },
    {
        "שם_פרטי": "רון",
        "שם_משפחה": "אלטברג",
        "שולחן": 10
    },
    {
        "שם_פרטי": "הרב מנחם וידידה ",
        "שם_משפחה": "אליהו",
        "שולחן": 6
    },
    {
        "שם_פרטי": "חגית והראל",
        "שם_משפחה": "אליהו",
        "שולחן": 12
    },
    {
        "שם_פרטי": "אסי ובני",
        "שם_משפחה": "אליהו",
        "שולחן": 17
    },
    {
        "שם_פרטי": "נעמה",
        "שם_משפחה": "אליהו",
        "שולחן": 17
    },
    {
        "שם_פרטי": "הדר",
        "שם_משפחה": "אלימלך",
        "שולחן": 32
    },
    {
        "שם_פרטי": "יפה ושמעון",
        "שם_משפחה": "אלקיים",
        "שולחן": 26
    },
    {
        "שם_פרטי": "זיו ומיטל",
        "שם_משפחה": "אלקיים",
        "שולחן": 26
    },
    {
        "שם_פרטי": "עדן",
        "שם_משפחה": "אלקיים",
        "שולחן": 26
    },
    {
        "שם_פרטי": "ליאור ונוגה",
        "שם_משפחה": "אמיר",
        "שולחן": 32
    },
    {
        "שם_פרטי": "אורה ויוסי",
        "שם_משפחה": "אמסלם",
        "שולחן": 27
    },
    {
        "שם_פרטי": "ניר",
        "שם_משפחה": "אסגלי",
        "שולחן": 10
    },
    {
        "שם_פרטי": "שרית",
        "שם_משפחה": "אסולין",
        "שולחן": 9
    },
    {
        "שם_פרטי": "דודו ולירז",
        "שם_משפחה": "אסולין",
        "שולחן": 9
    },
    {
        "שם_פרטי": "אוראל ובן",
        "שם_משפחה": "אסייג",
        "שולחן": 9
    },
    {
        "שם_פרטי": "שושי",
        "שם_משפחה": "אסרף",
        "שולחן": 3
    },
    {
        "שם_פרטי": "משה",
        "שם_משפחה": "אסרף",
        "שולחן": 3
    },
    {
        "שם_פרטי": "דוד וענת",
        "שם_משפחה": "אסרף",
        "שולחן": 4
    },
    {
        "שם_פרטי": "דניאל ותהל",
        "שם_משפחה": "אסרף",
        "שולחן": 4
    },
    {
        "שם_פרטי": "שמחה ושלמה",
        "שם_משפחה": "אסרף",
        "שולחן": 11
    },
    {
        "שם_פרטי": "ישראל",
        "שם_משפחה": "אסרף",
        "שולחן": 11
    },
    {
        "שם_פרטי": "שמעון ועליזה",
        "שם_משפחה": "אסרף",
        "שולחן": 15
    },
    {
        "שם_פרטי": "חן ותהל",
        "שם_משפחה": "אסרף",
        "שולחן": 15
    },
    {
        "שם_פרטי": "גילי וסיוון",
        "שם_משפחה": "אסרף",
        "שולחן": 30
    },
    {
        "שם_פרטי": "יהודה וזמירה",
        "שם_משפחה": "אסרף",
        "שולחן": 30
    },
    {
        "שם_פרטי": "דורון וליאת",
        "שם_משפחה": "אסרף",
        "שולחן": 30
    },
    {
        "שם_פרטי": "איתמר ונועה ",
        "שם_משפחה": "אסרף",
        "שולחן": 35
    },
    {
        "שם_פרטי": "ניסים ",
        "שם_משפחה": "אסרף",
        "שולחן": 35
    },
    {
        "שם_פרטי": "רמי",
        "שם_משפחה": "אפללו",
        "שולחן": 19
    },
    {
        "שם_פרטי": "צדוק",
        "שם_משפחה": "אקצין",
        "שולחן": 21
    },
    {
        "שם_פרטי": "אמנון",
        "שם_משפחה": "ארנפלד",
        "שולחן": 33
    },
    {
        "שם_פרטי": "מרסל ודוד",
        "שם_משפחה": "בוזגלו",
        "שולחן": 9
    },
    {
        "שם_פרטי": "דודי",
        "שם_משפחה": "בונפילד",
        "שולחן": 19
    },
    {
        "שם_פרטי": "מרדכי",
        "שם_משפחה": "בוסקילה",
        "שולחן": 19
    },
    {
        "שם_פרטי": "נועה",
        "שם_משפחה": "בורשן",
        "שולחן": 21
    },
    {
        "שם_פרטי": "שמעון והילה",
        "שם_משפחה": "ביטון",
        "שולחן": 11
    },
    {
        "שם_פרטי": "מאיר",
        "שם_משפחה": "ביטון",
        "שולחן": 11
    },
    {
        "שם_פרטי": "יפה ויעקב",
        "שם_משפחה": "ביטון",
        "שולחן": 14
    },
    {
        "שם_פרטי": "אושר",
        "שם_משפחה": "ביטון",
        "שולחן": 19
    },
    {
        "שם_פרטי": "אלי וברכה",
        "שם_משפחה": "ביטון",
        "שולחן": 19
    },
    {
        "שם_פרטי": "רונן ויעל",
        "שם_משפחה": "ביטון",
        "שולחן": 19
    },
    {
        "שם_פרטי": "עזרא",
        "שם_משפחה": "בירו",
        "שולחן": 32
    },
    {
        "שם_פרטי": "יפה ואבי",
        "שם_משפחה": "בירנבאום",
        "שולחן": 27
    },
    {
        "שם_פרטי": "עידו ורותם",
        "שם_משפחה": "בן אל",
        "שולחן": 5
    },
    {
        "שם_פרטי": "אלרם ורינה",
        "שם_משפחה": "בן אל",
        "שולחן": 5
    },
    {
        "שם_פרטי": "עזרא ומירי",
        "שם_משפחה": "בן אל",
        "שולחן": 5
    },
    {
        "שם_פרטי": "יהודה",
        "שם_משפחה": "בן אליהו",
        "שולחן": 6
    },
    {
        "שם_פרטי": "אביאל ואביה",
        "שם_משפחה": "בן אליהו",
        "שולחן": 18
    },
    {
        "שם_פרטי": "חיים וחגית",
        "שם_משפחה": "בן אליהו",
        "שולחן": 18
    },
    {
        "שם_פרטי": "אבי",
        "שם_משפחה": "בן אליהו",
        "שולחן": 33
    },
    {
        "שם_פרטי": "אילן",
        "שם_משפחה": "בן אליהו",
        "שולחן": 33
    },
    {
        "שם_פרטי": "יעקב",
        "שם_משפחה": "בן אליהו",
        "שולחן": 33
    },
    {
        "שם_פרטי": "דוד",
        "שם_משפחה": "בן אליהו",
        "שולחן": 33
    },
    {
        "שם_פרטי": "יגאל",
        "שם_משפחה": "בן אליהו",
        "שולחן": 33
    },
    {
        "שם_פרטי": "עדן",
        "שם_משפחה": "בן דהן",
        "שולחן": 10
    },
    {
        "שם_פרטי": "נאוה וספי",
        "שם_משפחה": "בן דור",
        "שולחן": 27
    },
    {
        "שם_פרטי": "אסתי וישראל",
        "שם_משפחה": "בן ישי",
        "שולחן": 27
    },
    {
        "שם_פרטי": "אמנון",
        "שם_משפחה": "בן לולו",
        "שולחן": 16
    },
    {
        "שם_פרטי": "ניר",
        "שם_משפחה": "בן צור",
        "שולחן": 33
    },
    {
        "שם_פרטי": "אניטה",
        "שם_משפחה": "בן שימול",
        "שולחן": 14
    },
    {
        "שם_פרטי": "דוד ועליזה",
        "שם_משפחה": "בן שימול",
        "שולחן": 14
    },
    {
        "שם_פרטי": "מולי",
        "שם_משפחה": "בקיש",
        "שולחן": 27
    },
    {
        "שם_פרטי": "שולי ומיקי",
        "שם_משפחה": "בקר",
        "שולחן": 9
    },
    {
        "שם_פרטי": "שקד וחן",
        "שם_משפחה": "ברנדריס ובן ארי",
        "שולחן": 7
    },
    {
        "שם_פרטי": "יצחק",
        "שם_משפחה": "ג'אן",
        "שולחן": 32
    },
    {
        "שם_פרטי": "ציון וסימה",
        "שם_משפחה": "גבאי",
        "שולחן": 8
    },
    {
        "שם_פרטי": "רועי",
        "שם_משפחה": "גבאי",
        "שולחן": 11
    },
    {
        "שם_פרטי": "שמעון",
        "שם_משפחה": "גבאי",
        "שולחן": 11
    },
    {
        "שם_פרטי": "יניב ושגית",
        "שם_משפחה": "גבאי",
        "שולחן": 19
    },
    {
        "שם_פרטי": "מרים ומשה",
        "שם_משפחה": "גבאי",
        "שולחן": 19
    },
    {
        "שם_פרטי": "נועם ",
        "שם_משפחה": "גבאי",
        "שולחן": 35
    },
    {
        "שם_פרטי": "יוסי וחני ",
        "שם_משפחה": "גבאי",
        "שולחן": 35
    },
    {
        "שם_פרטי": "אביחי ",
        "שם_משפחה": "גואטה",
        "שולחן": 35
    },
    {
        "שם_פרטי": "נחמיה",
        "שם_משפחה": "גלעדי",
        "שולחן": 18
    },
    {
        "שם_פרטי": "חנה והרצל",
        "שם_משפחה": "גלעדי",
        "שולחן": 18
    },
    {
        "שם_פרטי": "וסתיו ואביתר",
        "שם_משפחה": "דהן",
        "שולחן": 8
    },
    {
        "שם_פרטי": "בני ואורה",
        "שם_משפחה": "דהן",
        "שולחן": 8
    },
    {
        "שם_פרטי": "אלעזר",
        "שם_משפחה": "דהן",
        "שולחן": 10
    },
    {
        "שם_פרטי": "אלי ואילנית",
        "שם_משפחה": "דהן",
        "שולחן": 33
    },
    {
        "שם_פרטי": "יניב",
        "שם_משפחה": "דולינסקי",
        "שולחן": 32
    },
    {
        "שם_פרטי": "אלמוג",
        "שם_משפחה": "דוקרקר",
        "שולחן": 21
    },
    {
        "שם_פרטי": "אתי ומשה",
        "שם_משפחה": "דיין",
        "שולחן": 8
    },
    {
        "שם_פרטי": "תמי ודוד",
        "שם_משפחה": "דנינו",
        "שולחן": 3
    },
    {
        "שם_פרטי": "אבירם ומעיין",
        "שם_משפחה": "דנינו",
        "שולחן": 3
    },
    {
        "שם_פרטי": "אביתר",
        "שם_משפחה": "דנינו",
        "שולחן": 3
    },
    {
        "שם_פרטי": "איתי ועדי",
        "שם_משפחה": "דנינו",
        "שולחן": 3
    },
    {
        "שם_פרטי": "יהונתן וצוקית",
        "שם_משפחה": "דנינו",
        "שולחן": 3
    },
    {
        "שם_פרטי": "נתנאל והילה",
        "שם_משפחה": "דנינו",
        "שולחן": 3
    },
    {
        "שם_פרטי": "תאיר",
        "שם_משפחה": "דנינו",
        "שולחן": 3
    },
    {
        "שם_פרטי": "ציפי",
        "שם_משפחה": "דרעי",
        "שולחן": 8
    },
    {
        "שם_פרטי": "חנה ואלי",
        "שם_משפחה": "דרעי",
        "שולחן": 11
    },
    {
        "שם_פרטי": "יניב ואתי",
        "שם_משפחה": "דרעי",
        "שולחן": 11
    },
    {
        "שם_פרטי": "ניר",
        "שם_משפחה": "דרעי",
        "שולחן": 11
    },
    {
        "שם_פרטי": "רינה",
        "שם_משפחה": "דרעי",
        "שולחן": 19
    },
    {
        "שם_פרטי": "יובל",
        "שם_משפחה": "הורביץ",
        "שולחן": 21
    },
    {
        "שם_פרטי": "שמואל",
        "שם_משפחה": "הרפז",
        "שולחן": 33
    },
    {
        "שם_פרטי": "עטר",
        "שם_משפחה": "ואיילה",
        "שולחן": 16
    },
    {
        "שם_פרטי": "יחיאל",
        "שם_משפחה": "והגר",
        "שולחן": 16
    },
    {
        "שם_פרטי": "אודליה",
        "שם_משפחה": "והראל",
        "שולחן": 13
    },
    {
        "שם_פרטי": "דביר ומיכל",
        "שם_משפחה": "ווהב",
        "שולחן": 32
    },
    {
        "שם_פרטי": "נוי",
        "שם_משפחה": "וויצמן",
        "שולחן": 7
    },
    {
        "שם_פרטי": "סמדי וגולן",
        "שם_משפחה": "וויצמן",
        "שולחן": 15
    },
    {
        "שם_פרטי": "מתן",
        "שם_משפחה": "ויזל",
        "שולחן": 20
    },
    {
        "שם_פרטי": "רומי ונדב",
        "שם_משפחה": "ויזל",
        "שולחן": 20
    },
    {
        "שם_פרטי": "חן",
        "שם_משפחה": "ויניב",
        "שולחן": 13
    },
    {
        "שם_פרטי": "הוד",
        "שם_משפחה": "ויסקין",
        "שולחן": 10
    },
    {
        "שם_פרטי": "לי",
        "שם_משפחה": "ויצמן",
        "שולחן": 10
    },
    {
        "שם_פרטי": "זוהר וזיו",
        "שם_משפחה": "וסרמן",
        "שולחן": 32
    },
    {
        "שם_פרטי": "רויטל",
        "שם_משפחה": "זינגר",
        "שולחן": 21
    },
    {
        "שם_פרטי": "בת אל ומיכאל",
        "שם_משפחה": "זלנר",
        "שולחן": 6
    },
    {
        "שם_פרטי": "גלעד",
        "שם_משפחה": "זלצמן",
        "שולחן": 16
    },
    {
        "שם_פרטי": "אייר וג'ניה",
        "שם_משפחה": "זמסקי",
        "שולחן": 24
    },
    {
        "שם_פרטי": "עדן",
        "שם_משפחה": "חדד",
        "שולחן": 10
    },
    {
        "שם_פרטי": "שלמה ודיצה",
        "שם_משפחה": "חדד",
        "שולחן": 25
    },
    {
        "שם_פרטי": "יפית ולירן",
        "שם_משפחה": "חזן",
        "שולחן": 12
    },
    {
        "שם_פרטי": "דוד",
        "שם_משפחה": "חי",
        "שולחן": 11
    },
    {
        "שם_פרטי": "בת ציון",
        "שם_משפחה": "חליגואה",
        "שולחן": 17
    },
    {
        "שם_פרטי": "גיא ושלומציון",
        "שם_משפחה": "חליגואה",
        "שולחן": 17
    },
    {
        "שם_פרטי": "גלעד והגר",
        "שם_משפחה": "חליגואה",
        "שולחן": 17
    },
    {
        "שם_פרטי": "רועי ומיכל",
        "שם_משפחה": "חליגואה",
        "שולחן": 17
    },
    {
        "שם_פרטי": "רחל ואייל",
        "שם_משפחה": "חליגואה",
        "שולחן": 17
    },
    {
        "שם_פרטי": "מימון ושמחה",
        "שם_משפחה": "חליגואה",
        "שולחן": 17
    },
    {
        "שם_פרטי": "אוריאל והודיה",
        "שם_משפחה": "חניה",
        "שולחן": 32
    },
    {
        "שם_פרטי": "טל ולימור",
        "שם_משפחה": "חרפוף",
        "שולחן": 4
    },
    {
        "שם_פרטי": "איתמר ואושרת",
        "שם_משפחה": "טל",
        "שולחן": 20
    },
    {
        "שם_פרטי": "אשר ורוני",
        "שם_משפחה": "טל",
        "שולחן": 20
    },
    {
        "שם_פרטי": "בועז",
        "שם_משפחה": "טל",
        "שולחן": 20
    },
    {
        "שם_פרטי": "ירדן",
        "שם_משפחה": "טל",
        "שולחן": 20
    },
    {
        "שם_פרטי": "עינת ואייל",
        "שם_משפחה": "טל",
        "שולחן": 20
    },
    {
        "שם_פרטי": "חפצי ואיציק",
        "שם_משפחה": "טל",
        "שולחן": 20
    },
    {
        "שם_פרטי": "יאיר",
        "שם_משפחה": "טל",
        "שולחן": 33
    },
    {
        "שם_פרטי": "דבורה",
        "שם_משפחה": "יואלי",
        "שולחן": 10
    },
    {
        "שם_פרטי": "גבי",
        "שם_משפחה": "יוסף",
        "שולחן": 16
    },
    {
        "שם_פרטי": "יהונתן וליטל",
        "שם_משפחה": "יוסף",
        "שולחן": 24
    },
    {
        "שם_פרטי": "יעל ומתן",
        "שם_משפחה": "יוסף",
        "שולחן": 24
    },
    {
        "שם_פרטי": "מיכל",
        "שם_משפחה": "יוסף",
        "שולחן": 24
    },
    {
        "שם_פרטי": "גאולה ואלי",
        "שם_משפחה": "יוסף",
        "שולחן": 24
    },
    {
        "שם_פרטי": "לאה",
        "שם_משפחה": "יוסף",
        "שולחן": 25
    },
    {
        "שם_פרטי": "אבי וכוכי",
        "שם_משפחה": "יוסף חי",
        "שולחן": 5
    },
    {
        "שם_פרטי": "אלי ורונית",
        "שם_משפחה": "יוסף חי",
        "שולחן": 5
    },
    {
        "שם_פרטי": "עדן",
        "שם_משפחה": "ימין",
        "שולחן": 10
    },
    {
        "שם_פרטי": "אורי",
        "שם_משפחה": "יעקובי",
        "שולחן": 16
    },
    {
        "שם_פרטי": "לאה",
        "שם_משפחה": "יפע",
        "שולחן": 6
    },
    {
        "שם_פרטי": "יושי ויפעה",
        "שם_משפחה": "יפע",
        "שולחן": 6
    },
    {
        "שם_פרטי": "ניסים",
        "שם_משפחה": "יפת",
        "שולחן": 33
    },
    {
        "שם_פרטי": "יהודה",
        "שם_משפחה": "כהן",
        "שולחן": 4
    },
    {
        "שם_פרטי": "אתי ונחשון",
        "שם_משפחה": "כהן",
        "שולחן": 5
    },
    {
        "שם_פרטי": "שחר",
        "שם_משפחה": "כהן",
        "שולחן": 7
    },
    {
        "שם_פרטי": "שירן",
        "שם_משפחה": "כהן",
        "שולחן": 7
    },
    {
        "שם_פרטי": "מאיר",
        "שם_משפחה": "כהן",
        "שולחן": 7
    },
    {
        "שם_פרטי": "יהונתן",
        "שם_משפחה": "כהן",
        "שולחן": 10
    },
    {
        "שם_פרטי": "אפרת ויוסי",
        "שם_משפחה": "כהן",
        "שולחן": 12
    },
    {
        "שם_פרטי": "חיים",
        "שם_משפחה": "כהן",
        "שולחן": 15
    },
    {
        "שם_פרטי": "דני ואילנית",
        "שם_משפחה": "כהן",
        "שולחן": 19
    },
    {
        "שם_פרטי": "זיו ואיילת",
        "שם_משפחה": "כהן",
        "שולחן": 32
    },
    {
        "שם_פרטי": "אוראל ",
        "שם_משפחה": "כהן",
        "שולחן": 35
    },
    {
        "שם_פרטי": "בן ",
        "שם_משפחה": "כהן",
        "שולחן": 35
    },
    {
        "שם_פרטי": "יונתן ",
        "שם_משפחה": "כהן",
        "שולחן": 35
    },
    {
        "שם_פרטי": "יאיר",
        "שם_משפחה": "כהנא",
        "שולחן": 32
    },
    {
        "שם_פרטי": "דוד",
        "שם_משפחה": "כלף",
        "שולחן": 7
    },
    {
        "שם_פרטי": "אייל ",
        "שם_משפחה": "כספי",
        "שולחן": 35
    },
    {
        "שם_פרטי": "ליאב ",
        "שם_משפחה": "כץ",
        "שולחן": 35
    },
    {
        "שם_פרטי": "נופר",
        "שם_משפחה": "להב",
        "שולחן": 21
    },
    {
        "שם_פרטי": "איתמר ואור",
        "שם_משפחה": "לוגסי",
        "שולחן": 10
    },
    {
        "שם_פרטי": "ליאור וחני",
        "שם_משפחה": "לוגסי",
        "שולחן": 16
    },
    {
        "שם_פרטי": "בן",
        "שם_משפחה": "לוטנברג",
        "שולחן": 24
    },
    {
        "שם_פרטי": "לאה ונחום",
        "שם_משפחה": "לוטנברג",
        "שולחן": 24
    },
    {
        "שם_פרטי": "רינה",
        "שם_משפחה": "לוי",
        "שולחן": 19
    },
    {
        "שם_פרטי": "צביקה",
        "שם_משפחה": "לוי",
        "שולחן": 19
    },
    {
        "שם_פרטי": "אבירן",
        "שם_משפחה": "לוי",
        "שולחן": 21
    },
    {
        "שם_פרטי": "גולדה ורמי",
        "שם_משפחה": "לחמי",
        "שולחן": 25
    },
    {
        "שם_פרטי": "אופיר",
        "שם_משפחה": "ליבר",
        "שולחן": 21
    },
    {
        "שם_פרטי": "דני",
        "שם_משפחה": "ללוש",
        "שולחן": 33
    },
    {
        "שם_פרטי": "אבישי",
        "שם_משפחה": "לנדסמן",
        "שולחן": 33
    },
    {
        "שם_פרטי": "ציפורה וששון",
        "שם_משפחה": "מאיר",
        "שולחן": 25
    },
    {
        "שם_פרטי": "טל",
        "שם_משפחה": "מאירמן",
        "שולחן": 10
    },
    {
        "שם_פרטי": "נתנאל ואבי",
        "שם_משפחה": "מונדרר",
        "שולחן": 18
    },
    {
        "שם_פרטי": "קובי",
        "שם_משפחה": "מזוז",
        "שולחן": 10
    },
    {
        "שם_פרטי": "עדי",
        "שם_משפחה": "מזרחי",
        "שולחן": 21
    },
    {
        "שם_פרטי": "נועם ואילון",
        "שם_משפחה": "מלכין",
        "שולחן": 32
    },
    {
        "שם_פרטי": "סימה ומומי",
        "שם_משפחה": "מרלי",
        "שולחן": 31
    },
    {
        "שם_פרטי": "תום ודניאל",
        "שם_משפחה": "מרלי",
        "שולחן": 31
    },
    {
        "שם_פרטי": "רון",
        "שם_משפחה": "מרלי",
        "שולחן": 31
    },
    {
        "שם_פרטי": "ליאב",
        "שם_משפחה": "מרלי",
        "שולחן": 31
    },
    {
        "שם_פרטי": "אוראל",
        "שם_משפחה": "נגר",
        "שולחן": 7
    },
    {
        "שם_פרטי": "דניאל ",
        "שם_משפחה": "נח",
        "שולחן": 35
    },
    {
        "שם_פרטי": "עדי",
        "שם_משפחה": "נחום",
        "שולחן": 10
    },
    {
        "שם_פרטי": "תמר וחנן",
        "שם_משפחה": "סבן",
        "שולחן": 14
    },
    {
        "שם_פרטי": "רינה ורמי",
        "שם_משפחה": "סופר",
        "שולחן": 31
    },
    {
        "שם_פרטי": "קובי",
        "שם_משפחה": "סיני",
        "שולחן": 4
    },
    {
        "שם_פרטי": "יניב",
        "שם_משפחה": "סמדר",
        "שולחן": 4
    },
    {
        "שם_פרטי": "גלית",
        "שם_משפחה": "סמדר",
        "שולחן": 4
    },
    {
        "שם_פרטי": "רפאל",
        "שם_משפחה": "עדרי",
        "שולחן": 10
    },
    {
        "שם_פרטי": "איתן",
        "שם_משפחה": "עזר",
        "שולחן": 15
    },
    {
        "שם_פרטי": "אלי",
        "שם_משפחה": "עמר",
        "שולחן": 11
    },
    {
        "שם_פרטי": "אברהם ושולה",
        "שם_משפחה": "עמר",
        "שולחן": 13
    },
    {
        "שם_פרטי": "משה",
        "שם_משפחה": "עמר",
        "שולחן": 13
    },
    {
        "שם_פרטי": "עמרם ומזל",
        "שם_משפחה": "עמר",
        "שולחן": 13
    },
    {
        "שם_פרטי": "יוחאי ושובל",
        "שם_משפחה": "עמר",
        "שולחן": 13
    },
    {
        "שם_פרטי": "דוד",
        "שם_משפחה": "עמר",
        "שולחן": 13
    },
    {
        "שם_פרטי": "חננאל ונועה",
        "שם_משפחה": "עמר",
        "שולחן": 13
    },
    {
        "שם_פרטי": "יאיר ותמי",
        "שם_משפחה": "עמר",
        "שולחן": 14
    },
    {
        "שם_פרטי": "שלום",
        "שם_משפחה": "עמר",
        "שולחן": 14
    },
    {
        "שם_פרטי": "שיראל",
        "שם_משפחה": "עמר",
        "שולחן": 16
    },
    {
        "שם_פרטי": "שרון ואודליה",
        "שם_משפחה": "עמר",
        "שולחן": 31
    },
    {
        "שם_פרטי": "אביאל ",
        "שם_משפחה": "עמר",
        "שולחן": 35
    },
    {
        "שם_פרטי": "אושר ",
        "שם_משפחה": "עמר",
        "שולחן": 35
    },
    {
        "שם_פרטי": "נטע ומשה",
        "שם_משפחה": "פינטו",
        "שולחן": 5
    },
    {
        "שם_פרטי": "נורית וישראל",
        "שם_משפחה": "פינקר",
        "שולחן": 19
    },
    {
        "שם_פרטי": "דקל",
        "שם_משפחה": "פינקר",
        "שולחן": 19
    },
    {
        "שם_פרטי": "מנחם",
        "שם_משפחה": "פל",
        "שולחן": 25
    },
    {
        "שם_פרטי": "מוריה",
        "שם_משפחה": "פלס",
        "שולחן": 7
    },
    {
        "שם_פרטי": "אדם",
        "שם_משפחה": "פלר",
        "שולחן": 10
    },
    {
        "שם_פרטי": "שניר",
        "שם_משפחה": "פרידמן",
        "שולחן": 15
    },
    {
        "שם_פרטי": "שני ודביר",
        "שם_משפחה": "פרץ",
        "שולחן": 10
    },
    {
        "שם_פרטי": "ציפי ושאול",
        "שם_משפחה": "פרץ",
        "שולחן": 14
    },
    {
        "שם_פרטי": "יעקב",
        "שם_משפחה": "פרץ",
        "שולחן": 16
    },
    {
        "שם_פרטי": "אלעד",
        "שם_משפחה": "פרץ",
        "שולחן": 19
    },
    {
        "שם_פרטי": "רחלי נועה",
        "שם_משפחה": "ציטיאט",
        "שולחן": 32
    },
    {
        "שם_פרטי": "מאיר ואורה",
        "שם_משפחה": "קדוש",
        "שולחן": 11
    },
    {
        "שם_פרטי": "יאיר ושירן",
        "שם_משפחה": "קדוש",
        "שולחן": 11
    },
    {
        "שם_פרטי": "יפה",
        "שם_משפחה": "קדוש",
        "שולחן": 11
    },
    {
        "שם_פרטי": "יחיאל וצביה",
        "שם_משפחה": "קדוש",
        "שולחן": 11
    },
    {
        "שם_פרטי": "אור",
        "שם_משפחה": "קהלני",
        "שולחן": 21
    },
    {
        "שם_פרטי": "משה",
        "שם_משפחה": "קופל",
        "שולחן": 33
    },
    {
        "שם_פרטי": "צבי",
        "שם_משפחה": "קופל",
        "שולחן": 33
    },
    {
        "שם_פרטי": "שי",
        "שם_משפחה": "קיבה",
        "שולחן": 7
    },
    {
        "שם_פרטי": "אודיה",
        "שם_משפחה": "קליימן",
        "שולחן": 7
    },
    {
        "שם_פרטי": "אירית",
        "שם_משפחה": "קלסקין",
        "שולחן": 25
    },
    {
        "שם_פרטי": "חלי",
        "שם_משפחה": "קרויטרו",
        "שולחן": 21
    },
    {
        "שם_פרטי": "רעון",
        "שם_משפחה": "קרן",
        "שולחן": 10
    },
    {
        "שם_פרטי": "דבי ועזרי",
        "שם_משפחה": "קרני",
        "שולחן": 26
    },
    {
        "שם_פרטי": "תומר",
        "שם_משפחה": "רבאני",
        "שולחן": 10
    },
    {
        "שם_פרטי": "ירונה",
        "שם_משפחה": "רבינוביץ'",
        "שולחן": 32
    },
    {
        "שם_פרטי": "יצחק",
        "שם_משפחה": "רופ",
        "שולחן": 33
    },
    {
        "שם_פרטי": "אוראל ונוה",
        "שם_משפחה": "רזי",
        "שולחן": 18
    },
    {
        "שם_פרטי": "לאה ואהרון",
        "שם_משפחה": "רטנר",
        "שולחן": 25
    },
    {
        "שם_פרטי": "יהל",
        "שם_משפחה": "רייך",
        "שולחן": 7
    },
    {
        "שם_פרטי": "תומר",
        "שם_משפחה": "רייס",
        "שולחן": 33
    },
    {
        "שם_פרטי": "רומי ושרה",
        "שם_משפחה": "שביט",
        "שולחן": 27
    },
    {
        "שם_פרטי": "יהודה ואורלי",
        "שם_משפחה": "שביט",
        "שולחן": 27
    },
    {
        "שם_פרטי": "מיכל",
        "שם_משפחה": "שדו",
        "שולחן": 15
    },
    {
        "שם_פרטי": "בר וחן",
        "שם_משפחה": "שויירמן",
        "שולחן": 24
    },
    {
        "שם_פרטי": "שלמה",
        "שם_משפחה": "שחר",
        "שולחן": 15
    },
    {
        "שם_פרטי": "צילה",
        "שם_משפחה": "שטריך",
        "שולחן": 27
    },
    {
        "שם_פרטי": "עילאי ",
        "שם_משפחה": "שילר",
        "שולחן": 35
    },
    {
        "שם_פרטי": "אביב",
        "שם_משפחה": "שנהב",
        "שולחן": 7
    },
    {
        "שם_פרטי": "חן",
        "שם_משפחה": "שפחון",
        "שולחן": 7
    },
    {
        "שם_פרטי": "יגל",
        "שם_משפחה": "שרעבי",
        "שולחן": 33
    },
    {
        "שם_פרטי": "טליה ומיכאל ",
        "שם_משפחה": "שרעבי",
        "שולחן": 35
    },
    {
        "שם_פרטי": "אתי ואילן",
        "שם_משפחה": "תמר",
        "שולחן": 17
    },
    {
        "שם_פרטי": "אהוד ומיכל",
        "שם_משפחה": "תפארת",
        "שולחן": 12
    },
    {
        "שם_פרטי": "דורון",
        "שם_משפחה": "תפארת",
        "שולחן": 12
    },
    {
        "שם_פרטי": "אליאס",
        "שם_משפחה": "תפארת",
        "שולחן": 25
    }
];
// Function to search for a guest by name
function searchGuest() {
    const nameInput = document.getElementById("nameInput").value.trim().toLowerCase(); // User input (case-insensitive)
    const resultElement = document.getElementById("result");

    // Reset the result display
    resultElement.innerHTML = "";

    if (nameInput === "") {
        alert("הכנס את שם האורח");
        return;
    }

    // Search for guests by combining first name and last name
    const matchingGuests = guests.filter(g => 
        `${g["שם_פרטי"]} ${g["שם_משפחה"]}`.toLowerCase().includes(nameInput)
    );

    if (matchingGuests.length > 0) {
        matchingGuests.forEach(guest => {
            const guestDiv = document.createElement("div");
            guestDiv.innerHTML = `
                <p>שם פרטי: ${guest["שם_פרטי"]}</p>
                <p>שם משפחה: ${guest["שם_משפחה"]}</p>
                <p>שולחן: ${guest["שולחן"]}</p>
                <br><br>
            `;
            resultElement.appendChild(guestDiv);
        });
    } else {
        const noMatchDiv = document.createElement("div");
        noMatchDiv.innerHTML = `
            <p>שם לא נמצא</p>
        `;
        resultElement.appendChild(noMatchDiv);
    }
}

// Function to search by table number
function searchByTable() {
    const tableInput = document.getElementById("tableInput").value.trim();
    const resultElement = document.getElementById("result");

    // Reset the result display
    resultElement.innerHTML = "";

    if (tableInput === "") {
        alert("הכנס את מספר שולחן");
        return;
    }

    // Search for guests by table number
    const matchingGuests = guests.filter(g => g["שולחן"] === parseInt(tableInput));

    if (matchingGuests.length > 0) {
        matchingGuests.forEach(guest => {
            const guestDiv = document.createElement("div");
            guestDiv.innerHTML = `
                <p>שם פרטי: ${guest["שם_פרטי"]}</p>
                <p>שם משפחה: ${guest["שם_משפחה"]}</p>
                <p>שולחן: ${guest["שולחן"]}</p>
                <br><br>
            `;
            resultElement.appendChild(guestDiv);
        });
    } else {
        const noMatchDiv = document.createElement("div");
        noMatchDiv.innerHTML = `
            <p>לא נמצא אורח עם מספר שולחן זה</p>
        `;
        resultElement.appendChild(noMatchDiv);
    }
}

// Function to display the full sorted list of guests
function displayFullList() {
    const resultElement = document.getElementById("result");

    // Reset the result display
    resultElement.innerHTML = "";

    // Sort guests by last name and then first name
    const sortedGuests = guests.sort((a, b) => {
        const nameA = `${a["שם_משפחה"]} ${a["שם_פרטי"]}`.toLowerCase();
        const nameB = `${b["שם_משפחה"]} ${b["שם_פרטי"]}`.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return a["שולחן"] - b["שולחן"];
    });

    // Display the sorted list
    sortedGuests.forEach(guest => {
        const guestDiv = document.createElement("div");
        guestDiv.innerHTML = `
            <p>שם פרטי: ${guest["שם_פרטי"]}</p>
            <p>שם משפחה: ${guest["שם_משפחה"]}</p>
            <p>שולחן: ${guest["שולחן"]}</p>
            <br><br>
        `;
        resultElement.appendChild(guestDiv);
    });
}

