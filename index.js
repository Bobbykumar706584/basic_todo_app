const button = document.querySelector("#add_todo");

button.onclick = () =>{
    const text_box = document.querySelector("#new_item");
    const li_value = "<li>" + text_box.value + "</li>"
    console.log(li_value);
    const ul_to_fill = document.querySelector("#all_todos")
    ul_to_fill.innerHTML = li_value + ul_to_fill.innerHTML
}