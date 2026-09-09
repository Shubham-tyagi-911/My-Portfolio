const skillSets={
  languages:[
    ["🐍","Python","Programming language",80],
    ["⚙️","C","Programming fundamentals",72],
    ["🧩","C++","OOP & problem solving",85],
    ["🟨","JavaScript","Web programming",70]
  ],
  frameworks:[
    ["🐍","Django","Python web framework",62],
    ["🧪","Flask","Python microframework",78],
    ["🟢","Node.js","JavaScript runtime",65],
    ["⚛️","React","Frontend library",60]
  ],
  data:[
    ["🗄️","Oracle Database","Relational database",60],
    ["🗃️","Microsoft SQL Server","SQL database",58],
    ["🛢️","MySQL","Used in Spend Wise",72],
    ["🔌","REST / CRUD","API & data operations",70]
  ],
  tools:[
    ["⌨️","VS Code","Development environment",80],
    ["🐙","Git / GitHub","Version control",70],
    ["🎨","Figma","Design & prototyping",62],
    ["🧠","Problem Solving","Core strength",78]
  ]
};
const grid=document.getElementById("skillGrid");
function renderSkills(key){
  grid.innerHTML=skillSets[key].map(s=>`<div class="skill"><div class="skill-head"><div class="skill-name"><div class="icon">${s[0]}</div><b>${s[1]}</b></div><span class="skill-percent">${s[3]}%</span></div><small>${s[2]}</small><div class="skill-bar"><div class="skill-fill" style="--level:${s[3]}%"></div></div></div>`).join("");
}
renderSkills("languages");
document.querySelectorAll(".tab").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active"); renderSkills(btn.dataset.tab);
  });
});

const body=document.body, themeBtn=document.getElementById("themeBtn");
const saved=localStorage.getItem("theme");
if(saved==="dark") body.classList.add("dark");
function themeText(){themeBtn.innerHTML=body.classList.contains("dark")?"☀ <span>Light</span>":"☾ <span>Dark</span>"}
themeText();
themeBtn.onclick=()=>{body.classList.toggle("dark");localStorage.setItem("theme",body.classList.contains("dark")?"dark":"light");themeText()};

const menuBtn=document.getElementById("menuBtn"), navLinks=document.querySelector(".nav-links");
menuBtn.onclick=()=>navLinks.classList.toggle("open");
document.querySelectorAll(".nav-links a").forEach(a=>a.onclick=()=>navLinks.classList.remove("open"));

window.addEventListener("scroll",()=>{
  const h=document.documentElement.scrollHeight-innerHeight;
  document.getElementById("progress").style.width=(scrollY/h*100)+"%";
  document.getElementById("toTop").style.display=scrollY>500?"grid":"none";
});
document.getElementById("toTop").onclick=()=>scrollTo({top:0,behavior:"smooth"});

document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const message=document.getElementById("message").value.trim();
  const subject=encodeURIComponent(`Portfolio contact from ${name}`);
  const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href=`mailto:tyagishubham911@gmail.com?subject=${subject}&body=${body}`;
  document.getElementById("formStatus").textContent="Opening your email app…";
});
