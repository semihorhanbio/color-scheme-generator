const color = document.getElementById('color-picker')
const colorMode = document.getElementById('color-mode')

document.getElementById('get-scheme-btn').addEventListener('click', () => {
    const hexValue = color.value.replace('#', '')
    const mode = colorMode.value
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${mode}`)
        .then(res => res.json())
        .then(data => {
            let html = ''
            data.colors.forEach(color => {
                html += `
                    <div class="color-item">
                        <img src="${color.image.bare}"/>
                        <p>${color.hex.value}</p>
                    </div>
                `
            })
            document.getElementById('color-scheme').innerHTML = html
        })
    })
