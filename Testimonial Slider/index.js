const testimonials = [
  {
    name: "Cherise G",
    photoUrl:
      "https://media.istockphoto.com/id/1830126474/pt/foto/portrait-of-a-business-man-sitting-in-an-office.jpg?s=2048x2048&w=is&k=20&c=1k2ddZJu1B89rsv74yQGKIfXgr1YsQUJXW_vmqWKdbU=",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere        doloribus fugiat odit veritatis in consequuntur nobis, amet quibusdam        pariatur quia! Quo qui libero a maxime ut molestias vitae deserunt doloremque?",
  },
  {
    name: "Joao Carlos K",
    photoUrl:
      "https://media.istockphoto.com/id/1478334984/pt/foto/typing-on-the-keyboard-man-in-formal-clothes-is-working-in-the-modern-office-using-computer.jpg?s=2048x2048&w=is&k=20&c=0mg42CHjRmRZ1o1_-JbyIU_192V9vE5pwrWhoFnS-NQ=",
    text: "Lorem ipsum dolor sit amet JSISK kaksllss skisd8s9ssk usdam  pariatur quia! Quo qui libero a maxime ut molestias vitae deserunt doloremque?",
  },
  {
    name: "Diego Lazaro C",
    photoUrl:
      "https://media.istockphoto.com/id/1418355621/pt/foto/accounting-bookkeeper-clerk-man-bank-advisor.jpg?s=2048x2048&w=is&k=20&c=wSaGaX4cMBMV68YUdcAzbH3NAWQcHSpQYedlE-jU0X4=",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloribus fugiat odit veritatis in consequuntur nobis,",
  },
  {
    name: "Joao Carlos K",
    photoUrl:
      "https://media.istockphoto.com/id/538238579/pt/foto/o-sucesso-est%C3%A1-a-fazer-coisas-extremamente-bem-comum.jpg?s=2048x2048&w=is&k=20&c=3wcveXuNTKGV0HXDAsqgNZENhjjmsxWpxt34niDAoxI=",
    text: "Lorem ipsum dolor sit amet JSISK kaksllss skisd8s9ssk usdam  pariatur quia! Quo qui libero a maxime ut molestias vitae deserunt doloremque?",
  },
];
const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestemonial();

function updateTestemonial() {
  const { name, photUrl, text } = testimonials[idx];
  imgEl.src = photUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    indx = 0;
  }
  setTimeout(() => {
    updateTestemonial();
  }, 3000);
}
