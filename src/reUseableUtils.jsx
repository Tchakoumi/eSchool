export const verifyValidUser = (user) => {
    let valid = this.props.etudiants.filter(student => {
        return student.nomEtudiant === user
    })
    return valid.length !== 0 ? (valid[0].pwd) : (null)
}