
// Rows to append data
var rows = document.getElementsByClassName('card-deck')

// Loading board data
fetch("board.json")
  .then(response => response.json())
  .then(json => insert(rows, json));

// Function to insert cards
function insert(rows, json) {
    for (var i = 0; i < rows.length; i ++) {
        row = rows[i]
        rowData = json[i]

        // Card template and insertion
        row.innerHTML = rowData.map(entry => `
            <div class="card m-4">
                <img class="card-img-top mb-0 " src="img/board/${entry.img}" alt="Card image cap">
                <div class="containerBoard card-body   pt-0 pb-0 ">
                    <h3>
                        <b>${entry.name}</b><br>
                        <span class="boardDetailTitle">${entry.title}</span>
                    </h3>
                    <div class="boardText">
                        <div class="social">
                            <ul class="social-buttons">
                                <li>
                                    <a target="_blank" href="${entry.linkedin}" class="social-btn">
                                    <i class="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:${entry.email}}" class="social-btn">
                                    <i class="fa fa-envelope"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p class="card-text"></p>
                </div>
            </div>`
        )
    }
}
