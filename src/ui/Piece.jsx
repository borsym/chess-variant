import React, { useEffect, useState } from 'react'
import { Image, useStrictMode } from 'react-konva';
import useImage from 'use-image'

const Piece = (props) => {
    const choiceOfColor = props.isWhite ? 0 : 1
    const [image] = useImage(props.imgurls[choiceOfColor]);
    const isDragged = props.id === props.draggedPieceTargetId
    // const canThisPieceEvenBeMovedByThisPlayer = props.isWhite === props.thisPlayersColorIsWhite
    // const isItThatPlayersTurn = props.playerTurnToMoveIsWhite === props.thisPlayersColorIsWhite 
    const thisWhiteKingInCheck = props.id === "wk1" && props.whiteKingInCheck
    const thisBlackKingInCheck = props.id === "bk1" && props.blackKingInCheck
    const endDragging = (e) => {
        props.onDragEnd(e)
    }
    let isSelected;
    const onClick = (e) => {
        props.onClick(e)
        isSelected = props.selectedItems.includes(props.id);
    }

    return <Image image={image}
         x = {props.x - 90}
         y = {props.y - 90}
         draggable = {(props.isWhite && props.playerTurnToMoveIsWhite) || (!props.isWhite && !props.playerTurnToMoveIsWhite)}
        //  draggable = {canThisPieceEvenBeMovedByThisPlayer && isItThatPlayersTurn}
         width = {isDragged ? 75 : 60}
         height = {isDragged ? 75 : 60}
         onDragStart = {props.onDragStart}
         onDragEnd = { (e) => endDragging(e) }
         onClick={ onClick }
         fill = {(thisWhiteKingInCheck && "red") || (thisBlackKingInCheck && "red") || (isSelected && "green")}
         id = {props.id}
         _useStrictMode = {true}
         />;
};

export default Piece