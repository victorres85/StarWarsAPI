let home = ''

function Character(character) {
    fetch(`${character.homeworld}`)
        .then((response) => response.json())
        .then((data) => {
            home = `${data.name}`
        })
        .catch((error) => console.error('Erro:', error.message || error))
}
return (
    <div className="col-3">
        <div className="card">
            <div className="card-body">
                <div class="row">
                    <h3 class="col-6">{character.name}</h3>
                    <div class="row">
                        <div class="col-3">
                            <p>gender:</p>
                        </div>
                        <div class="col-3">
                            <p>${character.gender}</p>
                        </div>
                    </div>
                    <p>{`date of birth: ${character.birth_year}`}</p>
                    <p>{`origin`: ${home}}</p>
                </div>

            </div>
        </div>
    </div>
);
}
export default Character;