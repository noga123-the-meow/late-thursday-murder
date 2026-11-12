// הקובץ הזה רץ בדפדפן. לא צריך Node.js כדי להפעיל אותו.
// HTML כבר מחבר אותו לדף באמצעות <script src="script.js" defer>.
document.querySelector('#js-status').textContent = 'JavaScript מחובר ✓';

// שנו את התשובה כאן, במירכאות. הסוד גלוי: זה פרויקט צד לקוח.
const secretCode = 'שחר';

// querySelector מוצא רכיב ב-HTML לפי ה-id שלו. # מסמן חיפוש לפי id.
const form = document.querySelector('#code-form');
const input = document.querySelector('#code');
const message = document.querySelector('#message');
const door = document.querySelector('#door');

// הקוד שבתוך הפונקציה יפעל בכל שליחת הטופס: לחיצה על הכפתור או Enter.
form.addEventListener('submit', function (event) {
  event.preventDefault(); // מונע רענון של הדף כששולחים טופס.
  const guess = input.value.trim(); // קורא את הקלט ומסיר רווחים מהקצוות.

  // === משווה את הניחוש לתשובה. שתי האפשרויות הן טקסט.
  if (guess === secretCode) {
    message.textContent = 'הצלחנו! השער נפתח.';
    door.classList.add('open'); // CSS מזהה את המחלקה ומציג פתיחת שער.
  } else {
    message.textContent = 'עדיין לא… בדקו את החידה ונסו שוב.';
    door.classList.remove('open'); // נועל את השער אם הניחוש שגוי.
  }
});

// כפתור הרמז פועל בנפרד מהטופס. hidden קובע אם הרמז מוסתר.
const hintButton = document.querySelector('#hint-button');
const hint = document.querySelector('#hint');
hintButton.addEventListener('click', function () {
  hint.hidden = !hint.hidden; // ! הופך אמת לשקר ולהפך: פתיחה וסגירה.
  hintButton.setAttribute('aria-expanded', String(!hint.hidden));
});

const backstory = document.getElementById("backstory");
const noga = document.getElementById("noga");
const shachar = document.getElementById("shachar");
const hannah = document.getElementById("hannah");
const startb = document.getElementById("startb");
const officernq = document.getElementById("officernq");
const officersq = document.getElementById("officersq");
const officerhq = document.getElementById("officerhq");
const ansn = document.getElementById("ansn");
const anss = document.getElementById("anss");
const ansh = document.getElementById("ansh");
const suspects = document.getElementById("suspects");
const nogat = document.getElementById("nogat");
noga.style.display = "none";
shachar.style.display = "none";
hannah.style.display = "none";
suspects.style.display = "none";

function start() {
  backstory.style.display = backstory.style.display === "none" ? "block" : "none";
  startb.textContent = "הסיפור";
  suspects.style.display = "block";
}

// suspects
function nogaf() {
  noga.style.display = noga.style.display === "none" ? "block" : "none";
  officernq.style.display = "none";
  continuen.style.display = "none";
  ansn.style.display= "none";
  shachar.style.display = "none";
  hannah.style.display = "none";
  nogat.style.display = "block";
}

function shacharf() {
  shachar.style.display = shachar.style.display === "none" ? "block" : "none";
  officersq.style.display = "none";
  continues.style.display = "none";
  anss.style.display= "none";
  hannah.style.display = "none";
  noga.style.display = "none";
}

function hannahf() {
  hannah.style.display = hannah.style.display === "none" ? "block" : "none";
  officerhq.style.display = "none";
  continueh.style.display = "none";
  ansh.style.display= "none";
  shachar.style.display = "none";
  noga.style.display = "none";
}

// officer
function officer(buttonClicked) {

  if (buttonClicked.id === "officer-noga") {
    officernq.style.display = officernq.style.display === "none" ? "block" : "none";
    if (officernq.style.display === "none") {
      continuen.style.display= "none";
      ansn.style.display= "none";
    } else if (officernq.style.display === "block"){
      continuen.style.display= "block";
      
    }
  } else if (buttonClicked.id === "officer-shachar") {
    officersq.style.display = officersq.style.display === "none" ? "block" : "none";
    if (officersq.style.display === "none") {
      continues.style.display= "none";
      anss.style.display= "none";
    } else if (officersq.style.display === "block"){
      continues.style.display= "block";
    }
  } else if (buttonClicked.id === "officer-hannah") {
    officerhq.style.display = officerhq.style.display === "none" ? "block" : "none";
    if (officerhq.style.display === "none") {
      continueh.style.display= "none";
      ansh.style.display= "none";
    } else if (officerhq.style.display === "block"){
      continueh.style.display= "block";
    }
  }
}
function continuef(buttonClicked){

  if (buttonClicked.id === "continuen") {
    ansn.style.display = "block";
  } else if (buttonClicked.id === "continues") {
    anss.style.display = "block";
  } else if (buttonClicked.id === "continueh") {
    ansh.style.display = "block";
  }
}
if (officernq.style.display=== "none") {
  ansn.style.display = "none";
  continuen.style.display = "none";
} else if (officersq.style.display=== "none") {
  anss.style.display = "none";
  continues.style.display = "none";
} else if (officerhq.style.display=== "none") {
  ansh.style.display = "none";
  continuen.style.display = "none";
}