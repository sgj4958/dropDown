    const dropDownCustom = (rawObjectArray, injectElementId, setValue, option = {nameKey: "name", valueKey: "value", initialLabel: "선택하세요.", searchBox: true, multiple: true, max: 3, sort: true, deleteDuplicate: true, disable: false, setFirstValue: true, validationMinimum: 1, validationString: "최소 #validationMinimum개 이상 선택하세요."}) => {

        const optionDefault = {
            nameKey: "name", 
            valueKey: "value", 
            initialLabel: "선택하세요.", 
            searchBox: true, 
            multiple: true, 
            max: 3, 
            sort: true, 
            deleteDuplicate: true, 
            disable: false, 
            setFirstValue: true, 
            validationMinimum: 1, 
            validationString: "최소 #validationMinimum개 이상 선택하세요."
        }
        option = {
            ...optionDefault,
            ...option
        }

        const uniqueNumber = Math.floor(Math.random() * 10e5)
        const dropDownCustomName = "dropDownCustom"
        const dropDownCustomId = `${dropDownCustomName}-${uniqueNumber}`

        document.head.insertAdjacentHTML("beforeend", `<style>
#${dropDownCustomId}.dropDownCustom {
    margin: 5px;
    display: inline-block;
    position: relative;
}
#${dropDownCustomId}.dropDownCustom * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    width: 200px;
    font-size: 14px;
}
#${dropDownCustomId}.dropDownCustom .hide {
    height: 0 !important;
    opacity: 0;
}
#${dropDownCustomId}.dropDownCustom button {
    height: 40px;
    border-radius: 5px;
    border: 1px solid #dbdbdb;
    color: #555;

    appearance: none;
    cursor: pointer;

    background-color: #fff;
    text-align: left;
    padding: 5px 10px;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#${dropDownCustomId}.dropDownCustom button::after {
    content: "";
    position: relative;
    background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='14' viewBox='0 0 16 14'><path fill='none' stroke='%23aaa' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/></svg>");
    width: 16px;
    height: 14px;
    transition: .3s;
}
#${dropDownCustomId}.dropDownCustom button:has(+ article:not(.hide))::after {
    transform: rotate(180deg);
}
#${dropDownCustomId}.dropDownCustom article {
    background: #FFF;
    border: 1px solid #C4C4C4;
    box-shadow: 4px 4px 14px #00000026;
    border-radius: 10px;
    margin-top: 2px;
    overflow: hidden;
    position: absolute;
    transition: height .3s;
    z-index: 1;
}
#${dropDownCustomId}.dropDownCustom ul {
    border-top: 1px solid #ddd;
    overflow: hidden scroll;
    max-height: 300px;
    overscroll-behavior: contain;
}
#${dropDownCustomId}.dropDownCustom ul >li {
    color: #555;
    padding: 5px;
    margin: 5px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
}
#${dropDownCustomId}.dropDownCustom ul >li::before {
    content: "";
    width: 0;
    height: 100%;
    position: absolute;
    left: -5px;
    top: 0;
    background: #ffeab6;
    transition: .3s cubic-bezier(0, 0, 0, 1);
    border-radius: 0 15px 15px 0;
}
#${dropDownCustomId}.dropDownCustom ul >li p {
    position: relative;
    width: calc(100% - 30px);
}
#${dropDownCustomId}.dropDownCustom ul >li:hover p {
    color: #000;
}
#${dropDownCustomId}.dropDownCustom ul >li:hover::before {
    width: calc(100% - 10px);
}
#${dropDownCustomId}.dropDownCustom ul li.hide {
    display: none;
}
#${dropDownCustomId}.dropDownCustom input[type="text"] {
    padding: 5px;
    margin: 5px;
    width: calc(100% - 10px);
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: 0;
    color: #555;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="%23B7B7B7"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>');
    background-repeat: no-repeat;
    background-position: right 5px center;
}
#${dropDownCustomId}.dropDownCustom ul::-webkit-scrollbar {
    width: 5px;
}
#${dropDownCustomId}.dropDownCustom ul::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 10px;
    border: 2px solid transparent;
}
#${dropDownCustomId}.dropDownCustom ul::-webkit-scrollbar-track {
    background-color: #eee;
}

#${dropDownCustomId}.dropDownCustom input[type="checkbox"] {
    display: none;
}
#${dropDownCustomId}.dropDownCustom input[type="checkbox"] + label{
    width: 15px;
    height: 15px;
    border: 1px solid #aaa;
    position: relative;
    margin: 0 15px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
}
#${dropDownCustomId}.dropDownCustom input[type="checkbox"]:checked + label::after {
    content:'✔';
    color: deepskyblue;
}
#${dropDownCustomId}.dropDownCustom[disable="true"] button {
    cursor: not-allowed;
    background: #ddd;
}
#${dropDownCustomId}.dropDownCustom .dropDownCustomWarningWrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1px;

    position: absolute;
    bottom: -7px;
    border-bottom: 1px solid orangered;
}
#${dropDownCustomId}.dropDownCustom .dropDownCustomWarningWrap svg {
    width: 20px;
    margin-right: 5px;
}
#${dropDownCustomId}.dropDownCustom .dropDownCustomWarningWrap .hide {
    display: none;
}
#${dropDownCustomId}.dropDownCustom .dropDownCustomWarningText {
    text-wrap: pretty;
    color: orangered;
}
</style>`)

        const createDropDownCustom = () => {
            document.querySelector(`#${injectElementId}`).insertAdjacentHTML("beforeend", `
                <section id="${dropDownCustomId}" class="dropDownCustom" disable="${option.disable}" data-valid="false">
                    <button type="button">${option.initialLabel}</button>
                    <article class="hide">
                        ${option.searchBox ? `<input type="text" id="${dropDownCustomId}-dropDownCustomSearch" title="검색">` : ``}
                        <ul>
                            ${
                                // reduce 사용한 방법
                                // Array(Object).reduce(a => (option.sort ? a.sort((a, b) => a.name.localeCompare(b.name)) : a), (
                                //     option.deleteDuplicate 
                                //     ? rawObjectArray.reduce((a, c) => a.concat(
                                //         a.findIndex(b => b.value === c.value) === -1 ? c : []
                                //     ), []) 
                                //     : rawObjectArray))

                                // set 사용한 방법
                                // [...new Set(rawObjectArray.map(a => a.value))]
                                // .map(a => rawObjectArray.find(b => b.value === a))
                                // .sort((a, b) => option.sort ? a.name.localeCompare(b.name) : null)

                                // filter 사용한 방법
                                rawObjectArray.filter((a, b, c) => c.findIndex(d => d.value === a.value) === b)
                                .sort((a, b) => option.sort ? a.name.localeCompare(b.name) : null)
                                .map((e, i) => `
                                    <li>
                                        ${option.multiple ? `
                                        <input type="checkbox" id="${dropDownCustomId}-dropDownCustomCheckBox-${i}" name="${dropDownCustomId}-dropDownCustomCheckBox-${i}" title="선택">
                                        <label for="${dropDownCustomId}-dropDownCustomCheckBox-${i}"></label>
                                        ` : ``}
                                        <p value="${e[option.valueKey]}">${e[option.nameKey]}</p>
                                    </li>
                                `).join("")
                            }
                        </ul>
                    </article>

                    <div class="dropDownCustomWarningWrap hide">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 -960 960 960" fill="#ff0000">
                            <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                        </svg>
                        <span class="dropDownCustomWarningText">${option.validationString.replace("#validationMinimum", option.validationMinimum)}</span>
                    </div>
                </section>
            `)
        }
        createDropDownCustom()
        
        const dropDownCustom = document.querySelector(`#${dropDownCustomId}`)

        // article 에 height 넣기
        const article = dropDownCustom.querySelector("article")
        article.style.height = article.scrollHeight + "px"

        const click = target => {
            const setText = name => dropDownCustom.querySelector("button").textContent = name
            if(option.multiple) {

                // 선택한 체크박스가 체크안된 상태이고 최대치까지 선택하였을 경우
                if(!target.parentNode.querySelector("input[type='checkbox']").checked 
                && dropDownCustom.querySelectorAll("input[type='checkbox']:checked").length === Number(option.max))
                return alert(`최대 ${option.max}개까지만 선택할 수 있습니다.`)

                // 다중선택일 때 체크박스 토글 (label 기능)
                target.parentNode.querySelector("input[type='checkbox']").checked ^= true

                const nameArray = []
                const valueArray = []
                dropDownCustom.querySelectorAll("input[type='checkbox']:checked ~ p").forEach(element => {
                    nameArray.push(element.textContent)
                    valueArray.push(element.getAttribute("value"))
                })

                // 다중선택 값 넣기
                setText(nameArray.length ? nameArray.join(", ") : option.initialLabel)
                setValue(valueArray)
            } else {
                // 단일선택 값 넣기
                setText(target.textContent)
                setValue(target.getAttribute("value"))
            }

            // 유효성 검사
            const valid = option.multiple 
            ? (option.validationMinimum > dropDownCustom.querySelectorAll("input[type='checkbox']:checked").length ? false : true) 
            : (target.getAttribute("value") ? true : false)
            dropDownCustom.querySelector(".dropDownCustomWarningWrap").classList[valid ? "add" : "remove"]("hide")
            if(!valid) window.scroll({left: dropDownCustom.offsetWidth, top: dropDownCustom.offsetTop, behavior: "smooth"})
        }

        if(!option.disable)
        dropDownCustom.addEventListener("click", e => {

            if(e.target.type === "text") return

            // 드롭다운 클릭시 리스트 보여주기 & 검색창 클릭시 닫히지 않게 하기 & 다중선택일 때 닫히지 않게 하기
            if(e.target.tagName !== "INPUT" && !option.multiple || e.target.tagName === "BUTTON")
            e.currentTarget.querySelector("article").classList.toggle("hide")

            // 리스트 클릭시 값 넣기
            const tagDetectArray = ["LI", "P", "INPUT", "LABEL"]
            if(tagDetectArray.some(element => element === e.target.tagName)) {
                
                const getTarget = () => {
                    switch(e.target.tagName) {
                        case tagDetectArray[0]: return e.target.querySelector("p")
                        case tagDetectArray[1]: return e.target
                        case tagDetectArray[2]:
                        case tagDetectArray[3]: return e.target.parentNode.querySelector("p")
                        default:
                    }
                }
                const target = getTarget()
                return click(target)

                const setText = name => e.currentTarget.querySelector("button").textContent = name
                if(option.multiple) {

                    // 선택한 체크박스가 체크안된 상태이고 최대치까지 선택하였을 경우
                    if(!target.parentNode.querySelector("input[type='checkbox']").checked 
                    && dropDownCustom.querySelectorAll("input[type='checkbox']:checked").length === Number(option.max))
                    return alert(`최대 ${option.max}개까지만 선택할 수 있습니다.`)

                    // 다중선택일 때 체크박스 토글 (label 기능)
                    target.parentNode.querySelector("input[type='checkbox']").checked ^= true

                    const nameArray = []
                    const valueArray = []
                    dropDownCustom.querySelectorAll("input[type='checkbox']:checked ~ p").forEach(element => {
                        nameArray.push(element.textContent)
                        valueArray.push(element.getAttribute("value"))
                    })

                    // 다중선택 값 넣기
                    setText(nameArray.length ? nameArray.join(", ") : option.initialLabel)
                    setValue(valueArray)
                } else {
                    // 단일선택 값 넣기
                    setText(target.textContent)
                    setValue(target.getAttribute("value"))
                }
            }
        })
        if(option.setFirstValue) click(dropDownCustom.querySelector("p"))

        // 검색 기능
        if(option.searchBox)
        dropDownCustom.querySelector("input[type='text']").addEventListener("input", e => {
            dropDownCustom.querySelectorAll("li").forEach(element => {
                if(element.querySelector("p").textContent.search(e.target.value) === -1) element.classList.add("hide")
                else element.classList.remove("hide")
            })
        })

        // 빈 화면 클릭시 닫기
        window.addEventListener("click", e => {
            if(!e.target.closest(`#${dropDownCustomId}`))
            dropDownCustom.querySelector("article").classList.add("hide")
        })
    }