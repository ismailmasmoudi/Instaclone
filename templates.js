function htmlCodeRenderPosts(i) {
    let post = posts[i];
    let postAuthor = post['author'];
    let postimages = post['images'];
    let postDescription = post['description'];
    let postLocation = post['location'];
    let postLogos = post['logos'];
    let postDays = post['days'];
    return /*html*/`
    <div class="posts">

    <div class="card-post" id="card-post${i}" >

        <div class="logo-author-description-container">
            <div class="left-side">
                <div class="lad-left"><a ><img  class="logo-image" src="${postLogos}" ></a>  </div>
                
                <div class="lad-right"> 
                    <div class="card-author"> <a ><h3>${postAuthor}</h3></a> <p class="post-datum">${postDays}</p>  </div>
                    <div class="card-location">  <p>${postLocation}</p> </div>
                </div>
            </div> 
            <div class="right-side">
                
            <div class="close-button"> <a  onclick="deletePost(${i})"> <img  class="close-img" src="./close.png" alt=""></a></div>
            </div></div>
        <div class="images-description-container">

                <div class="card-images">  <img class="post-image" src="${postimages}" > </div>
                <div class="like-conatiner">
            <div class="links-buttons">
            <div  id="like-icon${i}" > <a><img  class="like-icons" src="./like-white.png" alt="like-icon" ></a></div>
            <div><a  href="#inputComment${i}">    <img class="like-icons" src="./comment-white.png" alt="comment-icon"></a></div>
            <div><a  >   <img class="like-icons" src="./share.png" alt="share-icon"> </a></div>
            </div>
        <div class="save-button" id="save-button${i}">
            
            <a onclick="saveChangeButton(${i})" >   <img class="like-icons-save" src="./save-white.png" alt="save-icon"> </a>
        
        </div>
        
    </div>
    <div class="card-description" id="likeContaier${i}"></div>
                <div class="card-description"> 
                <p class="card-description-author"> <a  ><b>${postAuthor} </b> </a> ${postDescription}</p>
                </div>
                <div class="card-comments"> 
                    <div id="comment${i}"></div>
                </div>
                <div class="input-comment"><input class="input-comment-field" id="inputComment${i}" onkeyup="PostCommentActiv(${i})" type="text" placeholder="Kommentieren...."> <a onclick="addComment(${i})" id="posten-button${i}" class="share-anker" >Posten</a></div>
            </div>
        </div>
    </div>
`
}

function htmlCodeRenderProposition(f) {
    let story = propositions[f];
    let propoPic = story['profilpic'];
    let propoAuthor = story['author'];
    return `
        <div class="my-propositions"> 
                        <div class="left-side-profil-proposition">
                            <div class="proposition-logo-cadre">
                            <a >  <img class="proposition-logo" src="${propoPic}" alt="profil-picture"></a>
                            </div>
                            <div class="proposition-title">
                            <a  class="friend-name">${propoAuthor}</a>
                                <p class="new-in-insta">Neu auf Instaclone</p>
                            </div>
                        </div>
                        <div class="right-side-profil-proposition">
                        <div  id='follow-folgen${f}'> <a onclick="followChangeButton(${f})"   class="follow-anker" >Folgen</a>  </div>   
                        </div>
                        
                    </div>
        
        `
}


// to save a post 
function saveChangeButton(i) {
    const post = posts[i];
    post['isSaved'] = true;
    let saveButton = document.getElementById(`save-button${i}`);
    saveButton.innerHTML = `<a onclick="unsaveChangeButton(${i})" > <img class="like-icons-save-black" src="./save-black.png" alt="saved-icon"></a>`;
    savePosts(i);
    renderSavedPosts(i);
}

// to unsave a post 
function unsaveChangeButton(i) {
    const post = posts[i];
    post['isSaved'] = false;
    let saveButton = document.getElementById(`save-button${i}`);
    saveButton.innerHTML = `<a onclick="saveChangeButton(${i})" > <img class="like-icons-save-black" src="./save-white.png" alt="saved-icon"></a>`;
    savePosts(i);
    renderSavedPosts(i);
}

// displays a post from body
function deletePost(i) {
    let cardPost = document.getElementById(`card-post${i}`);
    if (confirm("Sind Sie sicher , dass Sie diesen Post löschen möchten ?") == true) {
        cardPost.classList.add("d-none");
        return true;
    } else {
        return false;
    }
}

// displays button "Posten" when u write something
function PostCommentActiv(i) {
    let inputComment = document.getElementById(`inputComment${i}`);
    let postCommentButton = document.getElementById(`posten-button${i}`);
    if (inputComment.value.length == 0) {
        postCommentButton.classList.add("d-none");
    }
    else {
        postCommentButton.classList.remove("d-none");
    }
}