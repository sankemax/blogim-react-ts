import React from "react";
import "./About.css";
import { makeStyles, Theme, createStyles, Paper } from "@material-ui/core";

interface AboutProps {
    hidden: boolean
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            overflowWrap: 'break-word',
            backgroundColor: 'whitesmoke',
            marginTop: '10px',
            paddingTop: '16px',
            paddingRight: '5%',
            paddingLeft: '5%',
            color: 'black',
        },
    }),
);

export default function About({ hidden }: AboutProps) {
    const classes = useStyles();
    return (
        <Paper className={classes.paper} hidden={hidden}>
            <div>
                <p className="Header"><b>יש חיים מחוץ לפייסבוק</b></p>
                <p>בלוגים.אינפו הוא צובר (aggregator) בלוגים אשר מנוהל על ידי חנן כהן. מטרתו לעודד כתיבה עצמאית מעניינת בעברית.</p>
                <p>אם אתן מעוניינות שהבלוג שלכן יופיע באתר, כתבו לי ואני אוסיף אותו.</p>
                <p>אם אתם לא מעוניינות שהבלוג שלכן יופיע באתר, כתבו לי ואני אסיר אותו.</p>
                <p>ברשימה מופיעים בלוגים שמזמן לא כתבו בהם. הוספתי אותם כדי לעודד את הכותבות לחזור ולכתוב.</p>
                <p className="Header"><b>קריטריונים להכללת בלוג</b></p>
                <p>שיהיה מעניין (לי או לאחרים).</p>
                <p>שיהיה שייך לכותבים עצמאיים.</p>
                <p>הבלוג יכול להיות שייך לגוף מסחרי אבל לא גדול מדי ולא מתאמץ מדי למכור.</p>
                <p className="Header"><b>אודות חנן כהן</b></p>
                <p>אקטיביסט באינטרנט הישראלי מאז מי זוכר מתי.</p>
                <p>מפעיל האתר "לא רלוונטי" לבדיקת שמועות אינטרנט ומכתבי שרשרת.</p>
                <p>אימייל <a href="mailto:hanan@info.org.il">hanan@info.org.il</a>, טוויטר <a
                    href="https://twitter.com/hananc">@hananc</a> , פייסבוק? כבר לא שם.</p>
                <p>יוצר האתר הוא <a href="https://www.linkedin.com/in/maxim-golman-9892466b/">מקסים גולמן</a>.</p>
                <p>
                    קוד המקור נמצא בגיטהאב ואתם מוזמנים לתרום להמשך פיתוחו של האתר:
                    &nbsp;<a href="https://github.com/sankemax/blogim-react-ts">Frontend</a> and <a href="https://github.com/sankemax/rss-item-recorder">Backend</a>.
                </p>
                <p>עיצוב הלוגו - <a href="http://or-lev-cohen.com">אור לב-כהן</a> (הבן המוכשר שלי).</p>
                <p></p>
                <p>האתר נוצר ללא כוונות רווח.</p>
                <p>Based on <a href="https://github.com/scripting/river5">River5</a> by <a href="http://scripting.com/">Dave Winer</a>.</p>
            </div>
        </Paper>
    );
}
