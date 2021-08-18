$(function() {
    $("#movePiece").click(function(){
        const board = document.querySelector("#thisBoard")
        animateBoard(board,600,'a1','b7')
    })   
})

function animateBoard(board,duration,initial_position,final_position) {
    const { unwrapGrid, forceGridAnimation } = animateCSSGrid.wrapGrid(board,{duration: duration});
    var childNodesArray = Array.prototype.slice.call(board.childNodes)
    const piece = childNodesArray.find(element => element.localName == "piece" && element.classList.contains(initial_position))
    piece.classList.remove(initial_position);
    piece.classList.add(final_position);
    forceGridAnimation()
    unwrapGrid()    
}

function switchBoardOrientation(board){
    board.classList.toggle('rotated')
}