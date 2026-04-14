const Player = ({player}) => {
    const {name, score} = player;
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Score: {score}</p>
        </div>
    );
};

export default Player;