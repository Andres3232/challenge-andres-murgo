
export class Plan {
    constructor(
        private  monto: number,
    ){}

    public getMonto(): number {
        return this.monto;
    }

    public setMonto(monto: number): void {
        this.monto = monto;
    }

}