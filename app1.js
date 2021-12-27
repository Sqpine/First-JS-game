const modalWindow = document.querySelector('.modal-open')
const modalText = document.querySelector('.result')
const restartGame = document.querySelector('.button-game> button')
restartGame.addEventListener('click', startGame)
const circle = 'Circle'
const cross = 'Cross'
let winner = 'Unknown'
const zeroBox = document.querySelector('.zero')
const oneBox = document.querySelector('.one')
const twoBox = document.querySelector('.two')
const threeBox = document.querySelector('.three')
const fourBox = document.querySelector('.four')
const fiveBox = document.querySelector('.five')
const sixBox = document.querySelector('.six')
const sevenBox = document.querySelector('.seven')
const eightBox = document.querySelector('.eight')
let boxes = [zeroBox, oneBox, twoBox, threeBox, fourBox, fiveBox, sixBox, sevenBox, eightBox]

function modalOpen() {
    modalWindow.classList.remove('modal-close')
    modalWindow.classList.add('modal-open')
    if (!(winner === 'Draw')) {
        modalText.innerHTML = "This our winner " + winner
    } else {
        modalText.innerHTML = "Draw!"
    }
}

function modalClose() {
    modalWindow.classList.add('modal-close')
    modalWindow.classList.remove('modal-open')
}

function startGame() {
    boxes.forEach(function (elem) {
        if (elem.classList.contains('circle')) {
            elem.classList.remove('circle')
        } else if (elem.classList.contains('cross')) {
            elem.classList.remove('cross')
        }
        return 0
    })
    if (modalWindow.classList.contains('modal-close')) {
        modalOpen()
        start()
    } else if (modalWindow.classList.contains('modal-open')) {
        modalClose()
        start()
    }
}

function start() {
    let click = 0
    let checked = 0
    let resultCircle = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]
    let resultCross = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]
    let finish = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]
    zeroBox.addEventListener('click', function clicker() {
        if (zeroBox.classList.contains('cross') || zeroBox.classList.contains('circle')) {
            console.log('This box has style')
        } else {
            if (click % 2 === 0) {
                zeroBox.classList.add('circle')
                resultCircle[0][0] = 1
                click++
                checking(finish, resultCircle, circle)
            } else {
                zeroBox.classList.add('cross')
                resultCross[0][0] = 1
                click++
                checking(resultCross, cross)
            }
        }
        return 0
    })
    oneBox.addEventListener('click', function clicker() {
        if (oneBox.classList.contains('cross') || oneBox.classList.contains('circle')) {
            console.log('This box has style')
        } else {
            if (click % 2 === 0) {
                oneBox.classList.add('circle')
                resultCircle[0][1] = 1
                click++
                checking(resultCircle, circle)
            } else {
                oneBox.classList.add('cross')
                resultCross[0][1] = 1
                click++
                checking(resultCross, cross)
            }
        }
        return 0
    })
    twoBox.addEventListener('click', function clicker() {
        if (twoBox.classList.contains('cross') || twoBox.classList.contains('circle')) {
            console.log('This box has style')
        } else {
            if (click % 2 === 0) {
                twoBox.classList.add('circle')
                resultCircle[0][2] = 1
                click++
                checking(resultCircle, circle)
            } else {
                twoBox.classList.add('cross')
                resultCross[0][2] = 1
                click++
                checking(resultCross, cross)
            }
        }
        return 0
    })
    threeBox.addEventListener('click', function clicker() {
        if (threeBox.classList.contains('cross') || threeBox.classList.contains('circle')) {
            console.log('This box has style')
        } else {
            if (click % 2 === 0) {
                threeBox.classList.add('circle')
                resultCircle[1][0] = 1
                click++
                checking(resultCircle, circle)
            } else {
                threeBox.classList.add('cross')
                resultCross[1][0] = 1
                click++
                checking(resultCross, cross)
            }
        }
        return 0
    })
    fourBox.addEventListener('click', function clicker() {
        if (fourBox.classList.contains('cross') || fourBox.classList.contains('circle')) {
            console.log('This box has style')
        } else {
            if (click % 2 === 0) {
                fourBox.classList.add('circle')
                resultCircle[1][1] = 1
                click++
                checking(resultCircle, circle)
            } else {
                fourBox.classList.add('cross')
                resultCross[1][1] = 1
                click++
                checking(resultCross, cross)
            }
        }
        return 0
    })
    fiveBox.addEventListener('click', function clicker() {
        if (fiveBox.classList.contains('cross') || fiveBox.classList.contains('circle')) {
            console.log('This box has style')
        } else {
            if (click % 2 === 0) {
                fiveBox.classList.add('circle')
                resultCircle[1][2] = 1
                click++
                checking(resultCircle, circle)
            } else {
                fiveBox.classList.add('cross')
                resultCross[1][2] = 1
                click++
                checking(resultCross, cross)
            }
        }
        return 0
    })
    sixBox.addEventListener('click', function clicker() {
        if (sixBox.classList.contains('cross') || sixBox.classList.contains('circle')) {
            console.log('This box has style')
        } else {
            if (click % 2 === 0) {
                sixBox.classList.add('circle')
                resultCircle[2][0] = 1
                click++
                checking(resultCircle, circle)
            } else {
                sixBox.classList.add('cross')
                resultCross[2][0] = 1
                click++
                checking(resultCross, cross)
            }
        }
        return 0
    })
    sevenBox.addEventListener('click', function clicker() {
        if (sevenBox.classList.contains('cross') || sevenBox.classList.contains('circle')) {
            console.log('This box has style')
        } else {
            if (click % 2 === 0) {
                sevenBox.classList.add('circle')
                resultCircle[2][1] = 1
                click++
                checking(resultCircle, circle)
            } else {
                sevenBox.classList.add('cross')
                resultCross[2][1] = 1
                click++
                checking(resultCross, cross)
            }
        }
        return 0
    })
    eightBox.addEventListener('click', function clicker() {
        if (eightBox.classList.contains('cross') || eightBox.classList.contains('circle')) {
            console.log('This box has style')
        } else {
            if (click % 2 === 0) {
                eightBox.classList.add('circle')
                resultCircle[2][2] = 1
                click++
                checking(resultCircle, circle)
            } else {
                eightBox.classList.add('cross')
                resultCross[2][2] = 1
                click++
                checking(resultCross, cross)
            }
        }
        return 0
    })

    function checking(resultat, name) {
        if(!(click === 9)){
            for (let z = 0; z < 3; z++) {
                for (let i = 0; i < 3; i++) {
                    if (resultat[z][i] === 1) {
                        checked++
                        if (resultat[z][i] === 0) {
                            checked = 0
                            break
                        } else if (checked === 3) {
                            winner = name
                            modal()
                            checked = 0
                            break
                        }
                    } else if (i === 2) {
                        checked = 0
                        break
                    }
                }
                checked = 0
            }
            for (let z = 0; z < 3; z++) {
                for (let i = 0; i < 3; i++) {
                    if (resultat[i][z] === 1) {
                        checked++
                        if (resultat[i][z] === 0) {
                            checked = 0
                            break
                        } else if (checked === 3) {
                            winner = name
                            modal()
                            checked = 0
                            break
                        }
                    } else if (i === 2) {
                        checked = 0
                        break
                    }
                }
                checked = 0
            }
            let x = 0
            for (let z = 0; z < 3; z++) {
                if (resultat[z][x] === 1) {
                    checked++
                    if (resultat[z][x] === 0) {
                        checked = 0
                        break
                    } else if (checked === 3) {
                        winner = name
                        modal()
                        checked = 0
                        break
                    }
                } else if (z === 2) {
                    checked = 0
                    break
                }
                x++
            }
            x = 2
            checked = 0
            for (let z = 0; z < 3; z++) {
                if (resultat[z][x] === 1) {
                    checked++
                    if (resultat[z][x] === 0) {
                        checked = 0
                        break
                    } else if (checked === 3) {
                        winner = name
                        modal()
                        checked = 0
                        break
                    }
                } else if (z === 2) {
                    checked = 0
                    break
                }
                x--
            }
            checked = 0
        }
        else {
            winner = 'Draw'
            modal()
        }
        return 0
    }

    function modal() {
        click = 0
        checked = 0
        resultCircle.forEach(function (elem) {
            elem.fill(0)
            return 0
        })
        resultCross.forEach(function (elem) {
            elem.fill(0)
            return 0
        })
        finish.forEach(function (elem) {
            elem.fill(0)
            return 0
        })
        if (modalWindow.classList.contains('modal-close')) {
            modalOpen()
        } else if (modalWindow.classList.contains('modal-open')) {
            modalClose()
        }
        return 0
    }
}
