document.getElementById("form").addEventListener("submit", newInput);
function newInput(e){
  e.preventDefault();
  var gh = new GitHub();
  const username = document.getElementById('userinput').value
  var user = gh.getUser(username); // not a gist yet
  user.listRepos()
       .then(function({data: respoJson}) {
          document.getElementById("data").innerHTML = ""
          respoJson.map((repo, i) => {
            const repoName = repo.full_name.replace(`${username}/`, '');
            const html = `
              <div class="column">
                  <a class="tag is-primary" href="${repo.clone_url}" target="_blank">${repoName}</a>
              </div>
            `;
            document.getElementById("data").innerHTML += html;
          });
       });
   }
