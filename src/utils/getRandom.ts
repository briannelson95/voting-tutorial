const MAX_LENGENDS = 493

export const getRandom: (notThisOne?: number) => number = (
    notThisOne
) => {
    const legendNumber = Math.floor(Math.random() * (MAX_LENGENDS - 1))

    if (legendNumber != notThisOne) return legendNumber;
    return getRandom(notThisOne)
}

export const getOptionsForVote = () => {
    const firstId = getRandom()
    const secondId = getRandom(firstId)

    return [firstId, secondId];
}