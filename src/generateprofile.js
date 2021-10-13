const generateManager = function (manager) {
    return `
    <div class='col-4' mt-4'>
        <div class='card h-50'>
            <div class='card-header'>
            <h3>${manager.name}</h3>
            <h4>Manager</h4> <i class='material-icons'>content_paste</i>
            </div>
        
        <div class='card-body'>
            <p class='id'>ID: ${manager.id}</p>
            <p class='email'>Email: <a href='mailto:${manager.email}'>${manager.email}</a></p>
            <p class='office'>'Office Number: ${manager.office}</p>
        </div>
        
        </div>
    </div>
    `;
}

const generateEngineer = function (Engineer) {
    return `
    <div class='col-4 mt-4>
        <div class='card h-50>
            <div class='card-header'>
                <h3>${Engineer.name}</h3>
                <h4>Engineer</h4><i class='material-icons'></i>
            </div>
        
        <div class='card-body'>
            <p class='id'>ID: ${Engineer.id}</p>
            <p class='email'>Email: <a href='mailto:${Engineer.email}'>${Engineer.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${Engineer.github}">${Engineer.github}</a></p>
        </div>
        
        </div>
    </div>
`;

}