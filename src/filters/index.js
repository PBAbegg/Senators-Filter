import senators from '../data/senators'


export const allSenators = () => {
    return (senators)
}

export const byParty = (party = '') => {
    return allSenators().filter(senator => senator.party === party)
}

export const byState = (state = '') => {
    return allSenators().filter(senator => senator.state === state)
}

export const byRank = (senator_rank = '', state = '') => {
    return byState(state).filter(senator => senator.senator_rank === senator_rank)
}

export const allRepublicans = () => {
    return byParty('Republican')
}

export const allDemocrats = () => {
    return byParty('Democrat')
}

export const utahSenators = () => {
    return byState('UT')
}

export const senatorRank = () => {
    return byRank('senior', 'UT')
}

//test