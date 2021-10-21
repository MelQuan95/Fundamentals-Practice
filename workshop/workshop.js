export const Poison = (poison) => {
    return `
        <section class="poison card">
        
            <div class="id">${poison.id}</div>
            <div class="species">${poison.species}</div>
            <div class="commonName">${poison.commonName}</div>
            <div class="Fatal">${poison.fatal}</div>
            <div class="antidote">${poison.antidote}</div>
        </section>
    `
}