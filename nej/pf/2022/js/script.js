let colors = {};
async function bgchange(){
  let bg = document.querySelector('#background').value;
  document.querySelector('.background').style.backgroundImage = `url(${bg})`;
  colors = await materialDynamicColors(bg);
  let colorarr = [];
  // let arr = [];
  for(let k in colors){
    for(let i in colors[k]){
      colorarr.push(`--${k}-${i}:${colors[k][i]}`);
      // arr.push(`--${i}:var(--${k}-${i})`);
    }
  }
  // console.log(arr.join(';\n'));
  document.body.style = colorarr.join(';');
}