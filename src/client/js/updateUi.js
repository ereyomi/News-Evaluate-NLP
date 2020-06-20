const updateUi = (data) => {
    //parent
    const divParent = document.querySelector('#results');
    const card = document.createElement( 'div' );
    card.setAttribute('class', 'card')
   const {polarity, polarity_confidence, subjectivity_confidence, text} = data;
    card.innerHTML = `
        <p id="text-div">${text}</p>
        <p id="polarity">${polarity}</p>
        <p id="polarity-div">${polarity_confidence}</p>
        <p id="subjectivity-div">${subjectivity_confidence}</p>
    `; 
    divParent.appendChild( card ); 
};


export { updateUi }