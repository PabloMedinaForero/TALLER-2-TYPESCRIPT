export class Serie {
    id: number;
    titulo: string;
    productora: string;
    temporadas: number;
    sinopsis: string;
    link: string;
    caratula: string;

    constructor(id: number, titulo: string, productora: string, temporadas: number, sinopsis: string, link:string, caratula:string){
        this.id = id;
        this.titulo = titulo;
        this.productora = productora;
        this.temporadas = temporadas;
        this.sinopsis = sinopsis;
        this.link = link;
        this.caratula = caratula;
    }
}
