import React from "react";

interface AboutProps {
    hidden: boolean
}

export default function About({ hidden }: AboutProps) {
    return (
        <div hidden={hidden}>
            <h2>אודות האתר</h2>
            <p><b>יש חיים מחוץ לפייסבוק</b></p>
            <p>בלוגים.אינפו הוא צובר (aggregator) בלוגים אשר נוצר ומנוהל על ידי חנן כהן. מטרתו לעודד כתיבה עצמאית מעניינת בעברית.</p>
            <p>אם אתן מעוניינות שהבלוג שלכן יופיע באתר, כתבו לי ואני אוסיף אותו.</p>
            <p>אם אתם לא מעוניינות שהבלוג שלכן יופיע באתר, כתבו לי ואני אסיר אותו.</p>
            <p>ברשימה מופיעים בלוגים שמזמן לא כתבו בהם. הוספתי אותם כדי לעודד את הכותבות לחזור ולכתוב.</p>
            <p><b>קריטריונים להכללת בלוג</b></p>
            <p>שיהיה מעניין (לי או לאחרים).</p>
            <p>שיהיה שייך לכותבים עצמאיים.</p>
            <p>הבלוג יכול להיות שייך לגוף מסחרי אבל לא גדול מדי ולא מתאמץ מדי למכור.</p>
            <p><b>אודות חנן כהן</b></p>
            <p>אקטיביסט באינטרנט הישראלי מאז מי זוכר מתי.</p>
            <p>מפעיל האתר "לא רלוונטי" לבדיקת שמועות אינטרנט ומכתבי שרשרת.</p>
            <p>אימייל <a href="mailto:hanan@info.org.il">hanan@info.org.il</a>, טוויטר <a
                href="https://twitter.com/hananc">@hananc</a> , פייסבוק? כבר לא שם.</p>
            <p>עיצוב הלוגו - <a href="http://or-lev-cohen.com">אור לב-כהן</a> (הבן המוכשר שלי)</p>
            <p></p>
            <p>האתר נוצר ללא כוונות רווח.</p>
            <p>האתר בפיתוח.</p>
            <p>Shit happens</p>
            <p>Based on <a href="https://github.com/scripting/river5">River5</a> by <a href="http://scripting.com/">Dave Winer</a>.</p>
        </div>
    );
}
