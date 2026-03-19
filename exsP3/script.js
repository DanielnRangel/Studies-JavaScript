function verificar() {
  var data = new Date();
  var ano = data.getFullYear();

  var fAno = Number(document.querySelector("#txtAno").value);
  var res = document.querySelector("div#res");

  if (fAno == 0 || fAno > ano) {
    window.alert("[ERRO] Insira um ano de nascimento válido.");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - fAno;
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        img.src = "imgs/crianca_M.png";
        res.appendChild(img);
      } else if (idade < 18) {
        img.src = "imgs/adolescente_M.png";
        res.appendChild(img);
      } else if (idade < 50) {
        img.src = "imgs/adulto_M.png";
        res.appendChild(img);
      } else {
        img.src = "imgs/idoso_M.png";
        res.appendChild(img);
      }
    } else if (fsex[1].checked) {
      if (idade >= 0 && idade < 10) {
        img.src = "imgs/crianca_F.png";
        res.appendChild(img);
      } else if (idade < 18) {
        img.src = "imgs/adolescente_F.png";
        res.appendChild(img);
      } else if (idade < 50) {
        img.src = "imgs/adulto_F.png";
        res.appendChild(img);
      } else {
        img.src = "imgs/idosa_F.png";
        res.appendChild(img);
      }
    }
  }
}
