// const toggleDropdown = () => {
    
//     let dropDown = document. getElementById('dropMenu')
//     if(dropDown.style.zIndex === 1){
//         dropDown.style.zIndex = 2
//     } else {
//         dropDown.style.zIndex = 1
//     }
// }


const toggleDropdown = () => {
    if(document.getElementById('dropMenu')){
        document.getElementById('dropContainer').innerHTML = ''
        let dropMenu = document.createElement('div')
        dropMenu.setAttribute('id', 'dropMenu')
        // dropMenu.addEventListener("mouseout", dropDownOut)
        // dropMenu.innerHTML = `
        // <a class="contactLink" href="https://github.com/ALohman22">GitHub</a>
        // <a class="contactLink" href="https://www.linkedin.com/in/andrew-lohman-0079751b0/">LinkedIn</a>
        // `
        // document.getElementById('dropContainer').appendChild(dropMenu)
    } else {
        let dropMenu = document.createElement('div')
        dropMenu.setAttribute('id', 'dropMenu')
        // dropMenu.addEventListener("mouseout", dropDownOut)
        dropMenu.innerHTML = `
        <a class="contactLink" href="https://github.com/ALohman22">GitHub</a>
        <a class="contactLink" href="https://www.linkedin.com/in/andrew-lohman-0079751b0/">LinkedIn</a>
        `
        document.getElementById('dropContainer').appendChild(dropMenu)
    }
}
// const dropMenu = document.getElementById('dropMenu')
// const dropDownOut = () => {
//      document.getElementById('dropContainer').innerHTML = ''
// }

