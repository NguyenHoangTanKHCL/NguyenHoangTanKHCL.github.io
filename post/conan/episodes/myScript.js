var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");
var footer=document.getElementById("site-footer");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor= "#ef9a9a";
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor="rgb(30,30,30)";
    var offsetHeight = tabPanels[panelIndex].offsetHeight - 200;
    footer.style.marginTop = offsetHeight + "px";
}
showPanel(0,'#f44336');