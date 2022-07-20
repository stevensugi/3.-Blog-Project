//Selector 
const titleInput = document.querySelector('#title');
const UserIdInput = document.querySelector('#userId');
const IdInput = document.querySelector('#id');
const BodyInput = document.querySelector('#body');
const msg = document.querySelector('.msg');

//Event Listeners
document.getElementById('button').addEventListener('click', loadJSON);
document.getElementById('result').addEventListener('click', deletePost);
document.getElementById('result2').addEventListener('click', deletePost);
document.getElementById('result').addEventListener('click', updatePost);
document.getElementById('my-form').addEventListener('submit', onSubmit);

//Function
function loadJSON() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(res) {
        return res.json();
    })
    .then(function(data){
        //Parent DIV
        const parentDiv = document.createElement('div');
        parentDiv.classList.add('result');

        data.forEach(function(post){
        //Parent Article
        const parentArticle = document.createElement('article');
        parentArticle.classList.add('masonry__brick');
        parentArticle.classList.add('format-standard');
        parentArticle.classList.add('entry');
        
        // Post DIV
        const postDIV = document.createElement('div');
        postDIV.classList.add('entry__text');
        parentArticle.appendChild(postDIV);

        // Title DIV
        const headerDIV = document.createElement('div');
        headerDIV.classList.add('entry__header');
        postDIV.appendChild(headerDIV)

        //h2
        const title = document.createElement('h2');
        title.classList.add('entry__title');
        title.innerText = post.title;
        headerDIV.appendChild(title);

        // User Data DIV
        const userDIV = document.createElement('div');
        userDIV.classList.add('entry__meta');
        headerDIV.appendChild(userDIV);

        // Span User
        const spanUser = document.createElement('span');
        spanUser.classList.add('entry__meta-cat');
        spanUser.innerText = `User Id: ${post.userId} - Id: ${post.id}`;
        userDIV.appendChild(spanUser);
        
        // Span Date
        const spanDate = document.createElement('span');
        spanDate.classList.add('entry__meta-date'); 
        spanDate.innerText = 'Apr 29, 2022';
        userDIV.appendChild(spanDate);

        // Body DIV
        const bodyDIV = document.createElement('div');
        bodyDIV.classList.add('entry__excerpt');
        postDIV.appendChild(bodyDIV);
        
        // P
        const paragraph = document.createElement('p');
        paragraph.innerText = post.body;
        bodyDIV.appendChild(paragraph);
    
        //Delete button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
        trashButton.classList.add("trash-btn");
        parentArticle.appendChild(trashButton);

        //Update Value
        const updateButton = document.createElement('button');
        updateButton.innerHTML = '<i class="fas fa-plus-square"> </i>';
        updateButton.classList.add("update-btn");
        parentArticle.appendChild(updateButton);
        
        //Append to Parent Div
        parentDiv.appendChild(parentArticle);
        });
        //Display in HTML
        document.getElementById('result').appendChild(parentDiv);
    });

}

function deletePost(e) {
    const item = e.target;
    if(item.classList[0] === 'trash-btn'){
    const item = e.target.parentElement;
    console.log(item)   
    item.remove();
    }
}

function updatePost(e) {
    const item = e.target;
    if(item.classList[0] === 'update-btn'){
    const item = e.target.parentElement;
    console.log(item);
    const title = document.createElement('label');
    title.innerText = document.getElementById('entry__title').textContent
    console.log(title)
    }
}

function onSubmit(e){
    e.preventDefault();
    // console.log(nameInput.value);
    if(titleInput.value === '' || UserIdInput.value === '' || IdInput.value === '' || BodyInput.value === ''){
        // alert('Please enter fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else{
        console.log('success');
        
    //Parent DIV
    const parentDiv = document.createElement('div');
    parentDiv.classList.add('result2');

    //Parent Article
    const parentArticle = document.createElement('article');
    parentArticle.classList.add('masonry__brick');
    parentArticle.classList.add('format-standard');
    parentArticle.classList.add('entry');
    
    // Post DIV
    const postDIV = document.createElement('div');
    postDIV.classList.add('entry__text');
    parentArticle.appendChild(postDIV);

    // Title DIV
    const headerDIV = document.createElement('div');
    headerDIV.classList.add('entry__header');
    postDIV.appendChild(headerDIV)

    //input Title
    const title = document.createElement('h2');
    title.classList.add('postTitle');
    title.innerText = titleInput.value;
    headerDIV.appendChild(title);

    // User Data DIV
    const userDIV = document.createElement('div');
    userDIV.classList.add('entry__meta');
    headerDIV.appendChild(userDIV);

    // Input User
    const spanUser = document.createElement('span');
    spanUser.classList.add('postID');
    spanUser.innerText = `User Id: ${UserIdInput.value} - Id: ${IdInput.value}`
    userDIV.appendChild(spanUser);
    
    // Span Date
    const spanDate = document.createElement('span');
    spanDate.classList.add('entry__meta-date'); 
    spanDate.innerText = '  Apr 29, 2022';
    userDIV.appendChild(spanDate);

    // Body DIV
    const bodyDIV = document.createElement('div');
    bodyDIV.classList.add('entry__excerpt');
    postDIV.appendChild(bodyDIV);
    
    // P
    const paragraph = document.createElement('p');
    paragraph.innerText = BodyInput.value;
    bodyDIV.appendChild(paragraph);

    //Check trash buttom
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
    trashButton.classList.add("trash-btn");
    parentArticle.appendChild(trashButton);

    parentDiv.appendChild(parentArticle);
    document.getElementById('result2').appendChild(parentDiv);

    //Clear fields
    titleInput.value = '';
    UserIdInput.value = '';
    IdInput.value = '';
    BodyInput.value = '';
    }
}