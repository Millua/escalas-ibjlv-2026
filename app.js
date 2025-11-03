// DADOS COMPLETOS E EXATOS DAS ESCALAS 2026 - IBJLV
// Extraídos diretamente do PDF fornecido
const escalas = [
    // ============ JANEIRO ============
    { mes: "Janeiro", dia: 1, dia_semana: "Quinta-feira", grupo: "", EBD: "", Tarde: "", Noite: "" },
    { mes: "Janeiro", dia: 2, dia_semana: "Sexta-feira", grupo: "G1", EBD: "", Tarde: "", Noite: "" },
    { mes: "Janeiro", dia: 3, dia_semana: "Sábado", grupo: "G2", EBD: "", Tarde: "", Noite: "" },
    { mes: "Janeiro", dia: 4, dia_semana: "Domingo", grupo: "", EBD: "G6", Tarde: "G7", Noite: "G8" },
    { mes: "Janeiro", dia: 7, dia_semana: "Quarta-feira", grupo: "G3", EBD: "", Tarde: "", Noite: "" },
    { mes: "Janeiro", dia: 9, dia_semana: "Sexta-feira", grupo: "G5", EBD: "", Tarde: "", Noite: "" },
    { mes: "Janeiro", dia: 11, dia_semana: "Domingo", grupo: "", EBD: "G1", Tarde: "G2", Noite: "G3" },
    { mes: "Janeiro", dia: 14, dia_semana: "Quarta-feira", grupo: "G7", EBD: "", Tarde: "", Noite: "" },
    { mes: "Janeiro", dia: 16, dia_semana: "Sexta-feira", grupo: "G8", EBD: "", Tarde: "", Noite: "" },
    { mes: "Janeiro", dia: 18, dia_semana: "Domingo", grupo: "", EBD: "G4", Tarde: "G5", Noite: "G4" },
    { mes: "Janeiro", dia: 21, dia_semana: "Quarta-feira", grupo: "G2", EBD: "", Tarde: "", Noite: "" },
    { mes: "Janeiro", dia: 23, dia_semana: "Sexta-feira", grupo: "G3", EBD: "", Tarde: "", Noite: "" },
    { mes: "Janeiro", dia: 25, dia_semana: "Domingo", grupo: "", EBD: "G7", Tarde: "G8", Noite: "G1" },
    { mes: "Janeiro", dia: 28, dia_semana: "Quarta-feira", grupo: "G5", EBD: "", Tarde: "", Noite: "" },
    { mes: "Janeiro", dia: 29, dia_semana: "Quinta-feira", grupo: "", EBD: "", Tarde: "", Noite: "", café: "G1" },
    { mes: "Janeiro", dia: 30, dia_semana: "Sexta-feira", grupo: "G6", EBD: "", Tarde: "", Noite: "" },

    // ============ FEVEREIRO ============
    { mes: "Fevereiro", dia: 1, dia_semana: "Domingo", grupo: "", EBD: "G1", Tarde: "G2", Noite: "G3" },
    { mes: "Fevereiro", dia: 4, dia_semana: "Quarta-feira", grupo: "G1", EBD: "", Tarde: "", Noite: "" },
    { mes: "Fevereiro", dia: 6, dia_semana: "Sexta-feira", grupo: "G2", EBD: "", Tarde: "", Noite: "" },
    { mes: "Fevereiro", dia: 8, dia_semana: "Domingo", grupo: "", EBD: "G4", Tarde: "G5", Noite: "G6" },
    { mes: "Fevereiro", dia: 11, dia_semana: "Quarta-feira", grupo: "G7", EBD: "", Tarde: "", Noite: "" },
    { mes: "Fevereiro", dia: 13, dia_semana: "Sexta-feira", grupo: "G8", EBD: "", Tarde: "", Noite: "" },
    { mes: "Fevereiro", dia: 15, dia_semana: "Domingo", grupo: "", EBD: "G3", Tarde: "G7", Noite: "G1" },
    { mes: "Fevereiro", dia: 18, dia_semana: "Quarta-feira", grupo: "G4", EBD: "", Tarde: "", Noite: "" },
    { mes: "Fevereiro", dia: 20, dia_semana: "Sexta-feira", grupo: "G5", EBD: "", Tarde: "", Noite: "" },
    { mes: "Fevereiro", dia: 22, dia_semana: "Domingo", grupo: "", EBD: "G8", Tarde: "G4", Noite: "G2" },
    { mes: "Fevereiro", dia: 25, dia_semana: "Quarta-feira", grupo: "G6", EBD: "", Tarde: "", Noite: "" },
    { mes: "Fevereiro", dia: 27, dia_semana: "Sexta-feira", grupo: "G7", EBD: "", Tarde: "", Noite: "" },

    // ============ MARÇO ============
    { mes: "Março", dia: 1, dia_semana: "Domingo", grupo: "", EBD: "G4", Tarde: "G5", Noite: "G6" },
    { mes: "Março", dia: 4, dia_semana: "Quarta-feira", grupo: "G4", EBD: "", Tarde: "", Noite: "" },
    { mes: "Março", dia: 6, dia_semana: "Sexta-feira", grupo: "G2", EBD: "", Tarde: "", Noite: "" },
    { mes: "Março", dia: 8, dia_semana: "Domingo", grupo: "", EBD: "G1", Tarde: "G2", Noite: "G3" },
    { mes: "Março", dia: 11, dia_semana: "Quarta-feira", grupo: "G8", EBD: "", Tarde: "", Noite: "" },
    { mes: "Março", dia: 13, dia_semana: "Sexta-feira", grupo: "G7", EBD: "", Tarde: "", Noite: "" },
    { mes: "Março", dia: 15, dia_semana: "Domingo", grupo: "", EBD: "G7", Tarde: "G8", Noite: "G1" },
    { mes: "Março", dia: 18, dia_semana: "Quarta-feira", grupo: "G5", EBD: "", Tarde: "", Noite: "" },
    { mes: "Março", dia: 20, dia_semana: "Sexta-feira", grupo: "G1", EBD: "", Tarde: "", Noite: "" },
    { mes: "Março", dia: 22, dia_semana: "Domingo", grupo: "", EBD: "G3", Tarde: "G4", Noite: "G5" },
    { mes: "Março", dia: 25, dia_semana: "Quarta-feira", grupo: "G2", EBD: "", Tarde: "", Noite: "" },
    { mes: "Março", dia: 26, dia_semana: "Quinta-feira", grupo: "", EBD: "", Tarde: "", Noite: "", café: "G3" },
    { mes: "Março", dia: 27, dia_semana: "Sexta-feira", grupo: "G8", EBD: "", Tarde: "", Noite: "" },
    { mes: "Março", dia: 28, dia_semana: "Sábado", grupo: "G3", EBD: "", Tarde: "", Noite: "" },
    { mes: "Março", dia: 29, dia_semana: "Domingo", grupo: "", EBD: "G8", Tarde: "G6", Noite: "G7" },

    // ============ ABRIL ============
    { mes: "Abril", dia: 1, dia_semana: "Quarta-feira", grupo: "G2", EBD: "", Tarde: "", Noite: "" },
    { mes: "Abril", dia: 3, dia_semana: "Sexta-feira", grupo: "G4", EBD: "", Tarde: "", Noite: "" },
    { mes: "Abril", dia: 5, dia_semana: "Domingo", grupo: "", EBD: "G7", Tarde: "G8", Noite: "G1" },
    { mes: "Abril", dia: 8, dia_semana: "Quarta-feira", grupo: "G3", EBD: "", Tarde: "", Noite: "" },
    { mes: "Abril", dia: 10, dia_semana: "Sexta-feira", grupo: "G5", EBD: "", Tarde: "", Noite: "" },
    { mes: "Abril", dia: 12, dia_semana: "Domingo", grupo: "", EBD: "G2", Tarde: "G5", Noite: "G4" },
    { mes: "Abril", dia: 15, dia_semana: "Quarta-feira", grupo: "G5", EBD: "", Tarde: "", Noite: "" },
    { mes: "Abril", dia: 17, dia_semana: "Sexta-feira", grupo: "G8", EBD: "", Tarde: "", Noite: "" },
    { mes: "Abril", dia: 19, dia_semana: "Domingo", grupo: "", EBD: "G6", Tarde: "G7", Noite: "G3" },
    { mes: "Abril", dia: 22, dia_semana: "Quarta-feira", grupo: "G8", EBD: "", Tarde: "", Noite: "" },
    { mes: "Abril", dia: 24, dia_semana: "Sexta-feira", grupo: "G6", EBD: "", Tarde: "", Noite: "" },
    { mes: "Abril", dia: 26, dia_semana: "Domingo", grupo: "", EBD: "G8", Tarde: "G1", Noite: "G2" },
    { mes: "Abril", dia: 29, dia_semana: "Quarta-feira", grupo: "G6", EBD: "", Tarde: "", Noite: "" },

    // ============ MAIO ============
    { mes: "Maio", dia: 1, dia_semana: "Sexta-feira", grupo: "G1", EBD: "", Tarde: "", Noite: "" },
    { mes: "Maio", dia: 2, dia_semana: "Sábado", grupo: "G4", EBD: "", Tarde: "", Noite: "" },
    { mes: "Maio", dia: 3, dia_semana: "Domingo", grupo: "", EBD: "G2", Tarde: "G3", Noite: "G4" },
    { mes: "Maio", dia: 6, dia_semana: "Quarta-feira", grupo: "G8", EBD: "", Tarde: "", Noite: "" },
    { mes: "Maio", dia: 8, dia_semana: "Sexta-feira", grupo: "G5", EBD: "", Tarde: "", Noite: "" },
    { mes: "Maio", dia: 10, dia_semana: "Domingo", grupo: "", EBD: "G1", Tarde: "G2", Noite: "G3" },
    { mes: "Maio", dia: 13, dia_semana: "Quarta-feira", grupo: "G5", EBD: "", Tarde: "", Noite: "" },
    { mes: "Maio", dia: 15, dia_semana: "Sexta-feira", grupo: "G8", EBD: "", Tarde: "", Noite: "" },
    { mes: "Maio", dia: 17, dia_semana: "Domingo", grupo: "", EBD: "G4", Tarde: "G8", Noite: "G1" },
    { mes: "Maio", dia: 20, dia_semana: "Quarta-feira", grupo: "G6", EBD: "", Tarde: "", Noite: "" },
    { mes: "Maio", dia: 22, dia_semana: "Sexta-feira", grupo: "G4", EBD: "", Tarde: "", Noite: "" },
    { mes: "Maio", dia: 24, dia_semana: "Domingo", grupo: "", EBD: "G5", Tarde: "G6", Noite: "G7" },
    { mes: "Maio", dia: 27, dia_semana: "Quarta-feira", grupo: "G7", EBD: "", Tarde: "", Noite: "" },
    { mes: "Maio", dia: 28, dia_semana: "Quinta-feira", grupo: "", EBD: "", Tarde: "", Noite: "", café: "G5" },
    { mes: "Maio", dia: 29, dia_semana: "Sexta-feira", grupo: "G3", EBD: "", Tarde: "", Noite: "" },
    { mes: "Maio", dia: 30, dia_semana: "Sábado", grupo: "G1", EBD: "", Tarde: "", Noite: "" },
    { mes: "Maio", dia: 31, dia_semana: "Domingo", grupo: "", EBD: "G5", Tarde: "G6", Noite: "G2" },

    // ============ JUNHO ============
    { mes: "Junho", dia: 3, dia_semana: "Quarta-feira", grupo: "G6", EBD: "", Tarde: "", Noite: "" },
    { mes: "Junho", dia: 5, dia_semana: "Sexta-feira", grupo: "G4", EBD: "", Tarde: "", Noite: "" },
    { mes: "Junho", dia: 6, dia_semana: "Sábado", grupo: "G8", EBD: "", Tarde: "", Noite: "" },
    { mes: "Junho", dia: 7, dia_semana: "Domingo", grupo: "", EBD: "G5", Tarde: "G6", Noite: "G7" },
    { mes: "Junho", dia: 10, dia_semana: "Quarta-feira", grupo: "G4", EBD: "", Tarde: "", Noite: "" },
    { mes: "Junho", dia: 12, dia_semana: "Sexta-feira", grupo: "G3", EBD: "", Tarde: "", Noite: "" },
    { mes: "Junho", dia: 13, dia_semana: "Sábado", grupo: "G5", EBD: "", Tarde: "", Noite: "" },
    { mes: "Junho", dia: 14, dia_semana: "Domingo", grupo: "", EBD: "G8", Tarde: "G1", Noite: "G2" },
    { mes: "Junho", dia: 17, dia_semana: "Quarta-feira", grupo: "G3", EBD: "", Tarde: "", Noite: "" },
    { mes: "Junho", dia: 19, dia_semana: "Sexta-feira", grupo: "G7", EBD: "", Tarde: "", Noite: "" },
    { mes: "Junho", dia: 20, dia_semana: "Sábado", grupo: "G2", EBD: "", Tarde: "", Noite: "" },
    { mes: "Junho", dia: 21, dia_semana: "Domingo", grupo: "", EBD: "G3", Tarde: "G4", Noite: "G5" },
    { mes: "Junho", dia: 24, dia_semana: "Quarta-feira", grupo: "G2", EBD: "", Tarde: "", Noite: "" },
    { mes: "Junho", dia: 25, dia_semana: "Quinta-feira", grupo: "", EBD: "", Tarde: "", Noite: "", café: "G6" },
    { mes: "Junho", dia: 26, dia_semana: "Sexta-feira", grupo: "G1", EBD: "", Tarde: "", Noite: "" },
    { mes: "Junho", dia: 27, dia_semana: "Sábado", grupo: "G4", EBD: "", Tarde: "", Noite: "" },
    { mes: "Junho", dia: 28, dia_semana: "Domingo", grupo: "", EBD: "G6", Tarde: "G7", Noite: "G8" },

    // ============ JULHO ============
    { mes: "Julho", dia: 1, dia_semana: "Quarta-feira", grupo: "G6", EBD: "", Tarde: "", Noite: "" },
    { mes: "Julho", dia: 3, dia_semana: "Sexta-feira", grupo: "G8", EBD: "", Tarde: "", Noite: "" },
    { mes: "Julho", dia: 5, dia_semana: "Domingo", grupo: "", EBD: "G2", Tarde: "G8", Noite: "G1" },
    { mes: "Julho", dia: 8, dia_semana: "Quarta-feira", grupo: "G5", EBD: "", Tarde: "", Noite: "" },
    { mes: "Julho", dia: 10, dia_semana: "Sexta-feira", grupo: "G7", EBD: "", Tarde: "", Noite: "" },
    { mes: "Julho", dia: 12, dia_semana: "Domingo", grupo: "", EBD: "G6", Tarde: "G7", Noite: "G8" },
    { mes: "Julho", dia: 15, dia_semana: "Quarta-feira", grupo: "G4", EBD: "", Tarde: "", Noite: "" },
    { mes: "Julho", dia: 17, dia_semana: "Sexta-feira", grupo: "G1", EBD: "", Tarde: "", Noite: "" },
    { mes: "Julho", dia: 19, dia_semana: "Domingo", grupo: "", EBD: "G3", Tarde: "G4", Noite: "G5" },
    { mes: "Julho", dia: 22, dia_semana: "Quarta-feira", grupo: "G6", EBD: "", Tarde: "", Noite: "" },
    { mes: "Julho", dia: 24, dia_semana: "Sexta-feira", grupo: "G5", EBD: "", Tarde: "", Noite: "" },
    { mes: "Julho", dia: 26, dia_semana: "Domingo", grupo: "", EBD: "G8", Tarde: "G1", Noite: "G2" },
    { mes: "Julho", dia: 29, dia_semana: "Quarta-feira", grupo: "G3", EBD: "", Tarde: "", Noite: "" },
    { mes: "Julho", dia: 31, dia_semana: "Sexta-feira", grupo: "G7", EBD: "", Tarde: "", Noite: "" },

    // ============ AGOSTO ============
    { mes: "Agosto", dia: 1, dia_semana: "Sábado", grupo: "G7", EBD: "", Tarde: "", Noite: "" },
    { mes: "Agosto", dia: 2, dia_semana: "Domingo", grupo: "", EBD: "G3", Tarde: "G4", Noite: "G5" },
    { mes: "Agosto", dia: 5, dia_semana: "Quarta-feira", grupo: "G6", EBD: "", Tarde: "", Noite: "" },
    { mes: "Agosto", dia: 7, dia_semana: "Sexta-feira", grupo: "G8", EBD: "", Tarde: "", Noite: "" },
    { mes: "Agosto", dia: 8, dia_semana: "Sábado", grupo: "G6", EBD: "", Tarde: "", Noite: "" },
    { mes: "Agosto", dia: 9, dia_semana: "Domingo", grupo: "", EBD: "G1", Tarde: "G2", Noite: "G3" },
    { mes: "Agosto", dia: 12, dia_semana: "Quarta-feira", grupo: "G3", EBD: "", Tarde: "", Noite: "" },
    { mes: "Agosto", dia: 14, dia_semana: "Sexta-feira", grupo: "G4", EBD: "", Tarde: "", Noite: "" },
    { mes: "Agosto", dia: 15, dia_semana: "Sábado", grupo: "G3", EBD: "", Tarde: "", Noite: "" },
    { mes: "Agosto", dia: 16, dia_semana: "Domingo", grupo: "", EBD: "G4", Tarde: "G5", Noite: "G6" },
    { mes: "Agosto", dia: 19, dia_semana: "Quarta-feira", grupo: "G4", EBD: "", Tarde: "", Noite: "" },
    { mes: "Agosto", dia: 21, dia_semana: "Sexta-feira", grupo: "G5", EBD: "", Tarde: "", Noite: "" },
    { mes: "Agosto", dia: 22, dia_semana: "Sábado", grupo: "G4", EBD: "", Tarde: "", Noite: "" },
    { mes: "Agosto", dia: 23, dia_semana: "Domingo", grupo: "", EBD: "G7", Tarde: "G8", Noite: "G1" },
    { mes: "Agosto", dia: 26, dia_semana: "Quarta-feira", grupo: "G5", EBD: "", Tarde: "", Noite: "" },
    { mes: "Agosto", dia: 28, dia_semana: "Sexta-feira", grupo: "G6", EBD: "", Tarde: "", Noite: "" },
    { mes: "Agosto", dia: 29, dia_semana: "Sábado", grupo: "G5", EBD: "", Tarde: "", Noite: "" },
    { mes: "Agosto", dia: 30, dia_semana: "Domingo", grupo: "", EBD: "G2", Tarde: "G3", Noite: "G4" },

    // ============ SETEMBRO ============
    { mes: "Setembro", dia: 1, dia_semana: "Terça-feira", grupo: "G1", EBD: "", Tarde: "", Noite: "" },
    { mes: "Setembro", dia: 3, dia_semana: "Quinta-feira", grupo: "G6", EBD: "", Tarde: "", Noite: "" },
    { mes: "Setembro", dia: 4, dia_semana: "Sexta-feira", grupo: "G5", EBD: "", Tarde: "", Noite: "" },
    { mes: "Setembro", dia: 6, dia_semana: "Domingo", grupo: "", EBD: "G6", Tarde: "G7", Noite: "G8" },
    { mes: "Setembro", dia: 9, dia_semana: "Quarta-feira", grupo: "G5", EBD: "", Tarde: "", Noite: "" },
    { mes: "Setembro", dia: 11, dia_semana: "Sexta-feira", grupo: "G2", EBD: "", Tarde: "", Noite: "" },
    { mes: "Setembro", dia: 13, dia_semana: "Domingo", grupo: "", EBD: "G4", Tarde: "G5", Noite: "G6" },
    { mes: "Setembro", dia: 16, dia_semana: "Quarta-feira", grupo: "G2", EBD: "", Tarde: "", Noite: "" },
    { mes: "Setembro", dia: 18, dia_semana: "Sexta-feira", grupo: "G3", EBD: "", Tarde: "", Noite: "" },
    { mes: "Setembro", dia: 20, dia_semana: "Domingo", grupo: "", EBD: "G7", Tarde: "G8", Noite: "G1" },
    { mes: "Setembro", dia: 23, dia_semana: "Quarta-feira", grupo: "G6", EBD: "", Tarde: "", Noite: "" },
    { mes: "Setembro", dia: 24, dia_semana: "Quinta-feira", grupo: "", EBD: "", Tarde: "", Noite: "", café: "G1" },
    { mes: "Setembro", dia: 25, dia_semana: "Sexta-feira", grupo: "G4", EBD: "", Tarde: "", Noite: "" },
    { mes: "Setembro", dia: 27, dia_semana: "Domingo", grupo: "", EBD: "G2", Tarde: "G1", Noite: "G3" },

    // ============ OUTUBRO ============
    { mes: "Outubro", dia: 1, dia_semana: "Quinta-feira", grupo: "", EBD: "", Tarde: "", Noite: "" },
    { mes: "Outubro", dia: 2, dia_semana: "Sexta-feira", grupo: "", EBD: "", Tarde: "", Noite: "" },
    { mes: "Outubro", dia: 3, dia_semana: "Sábado", grupo: "", EBD: "", Tarde: "", Noite: "" },
    { mes: "Outubro", dia: 4, dia_semana: "Domingo", grupo: "", EBD: "G1", Tarde: "G2", Noite: "G3" },
    { mes: "Outubro", dia: 7, dia_semana: "Quarta-feira", grupo: "G8", EBD: "", Tarde: "", Noite: "" },
    { mes: "Outubro", dia: 9, dia_semana: "Sexta-feira", grupo: "G5", EBD: "", Tarde: "", Noite: "" },
    { mes: "Outubro", dia: 11, dia_semana: "Domingo", grupo: "", EBD: "G4", Tarde: "G8", Noite: "G1" },
    { mes: "Outubro", dia: 14, dia_semana: "Quarta-feira", grupo: "G5", EBD: "", Tarde: "", Noite: "" },
    { mes: "Outubro", dia: 16, dia_semana: "Sexta-feira", grupo: "G7", EBD: "", Tarde: "", Noite: "" },
    { mes: "Outubro", dia: 18, dia_semana: "Domingo", grupo: "", EBD: "G2", Tarde: "G3", Noite: "G4" },
    { mes: "Outubro", dia: 21, dia_semana: "Quarta-feira", grupo: "G6", EBD: "", Tarde: "", Noite: "" },
    { mes: "Outubro", dia: 23, dia_semana: "Sexta-feira", grupo: "G5", EBD: "", Tarde: "", Noite: "" },
    { mes: "Outubro", dia: 25, dia_semana: "Domingo", grupo: "", EBD: "G6", Tarde: "G5", Noite: "G7" },
    { mes: "Outubro", dia: 28, dia_semana: "Quarta-feira", grupo: "G7", EBD: "", Tarde: "", Noite: "" },
    { mes: "Outubro", dia: 30, dia_semana: "Sexta-feira", grupo: "G8", EBD: "", Tarde: "", Noite: "" },

    // ============ NOVEMBRO ============
    { mes: "Novembro", dia: 1, dia_semana: "Domingo", grupo: "", EBD: "G4", Tarde: "G5", Noite: "G6" },
    { mes: "Novembro", dia: 4, dia_semana: "Quarta-feira", grupo: "G1", EBD: "", Tarde: "", Noite: "" },
    { mes: "Novembro", dia: 6, dia_semana: "Sexta-feira", grupo: "G8", EBD: "", Tarde: "", Noite: "" },
    { mes: "Novembro", dia: 8, dia_semana: "Domingo", grupo: "", EBD: "G2", Tarde: "G3", Noite: "G4" },
    { mes: "Novembro", dia: 11, dia_semana: "Quarta-feira", grupo: "G7", EBD: "", Tarde: "", Noite: "" },
    { mes: "Novembro", dia: 13, dia_semana: "Sexta-feira", grupo: "G5", EBD: "", Tarde: "", Noite: "" },
    { mes: "Novembro", dia: 15, dia_semana: "Domingo", grupo: "", EBD: "G5", Tarde: "G6", Noite: "G7" },
    { mes: "Novembro", dia: 18, dia_semana: "Quarta-feira", grupo: "G4", EBD: "", Tarde: "", Noite: "" },
    { mes: "Novembro", dia: 20, dia_semana: "Sexta-feira", grupo: "G2", EBD: "", Tarde: "", Noite: "" },
    { mes: "Novembro", dia: 22, dia_semana: "Domingo", grupo: "", EBD: "G8", Tarde: "G1", Noite: "G2" },
    { mes: "Novembro", dia: 25, dia_semana: "Quarta-feira", grupo: "G5", EBD: "", Tarde: "", Noite: "" },
    { mes: "Novembro", dia: 26, dia_semana: "Quinta-feira", grupo: "", EBD: "", Tarde: "", Noite: "", café: "G3" },
    { mes: "Novembro", dia: 27, dia_semana: "Sexta-feira", grupo: "G6", EBD: "", Tarde: "", Noite: "" },
    { mes: "Novembro", dia: 28, dia_semana: "Sábado", grupo: "G7", EBD: "", Tarde: "", Noite: "" },
    { mes: "Novembro", dia: 29, dia_semana: "Domingo", grupo: "", EBD: "G6", Tarde: "G4", Noite: "G3" },

    // ============ DEZEMBRO ============
    { mes: "Dezembro", dia: 1, dia_semana: "Terça-feira", grupo: "G1", EBD: "", Tarde: "", Noite: "" },
    { mes: "Dezembro", dia: 2, dia_semana: "Quarta-feira", grupo: "G8", EBD: "", Tarde: "", Noite: "" },
    { mes: "Dezembro", dia: 3, dia_semana: "Quinta-feira", grupo: "G3", EBD: "", Tarde: "", Noite: "" },
    { mes: "Dezembro", dia: 6, dia_semana: "Domingo", grupo: "", EBD: "G7", Tarde: "G8", Noite: "G1" },
    { mes: "Dezembro", dia: 9, dia_semana: "Quarta-feira", grupo: "G7", EBD: "", Tarde: "", Noite: "" },
    { mes: "Dezembro", dia: 10, dia_semana: "Quinta-feira", grupo: "G5", EBD: "", Tarde: "", Noite: "" },
    { mes: "Dezembro", dia: 11, dia_semana: "Sexta-feira", grupo: "G4", EBD: "", Tarde: "", Noite: "" },
    { mes: "Dezembro", dia: 13, dia_semana: "Domingo", grupo: "", EBD: "G5", Tarde: "G6", Noite: "G7" },
    { mes: "Dezembro", dia: 16, dia_semana: "Quarta-feira", grupo: "G2", EBD: "", Tarde: "", Noite: "" },
    { mes: "Dezembro", dia: 17, dia_semana: "Quinta-feira", grupo: "G3", EBD: "", Tarde: "", Noite: "" },
    { mes: "Dezembro", dia: 18, dia_semana: "Sexta-feira", grupo: "G6", EBD: "", Tarde: "", Noite: "" },
    { mes: "Dezembro", dia: 20, dia_semana: "Domingo", grupo: "", EBD: "G8", Tarde: "G1", Noite: "G2" },
    { mes: "Dezembro", dia: 23, dia_semana: "Quarta-feira", grupo: "G5", EBD: "", Tarde: "", Noite: "" },
    { mes: "Dezembro", dia: 24, dia_semana: "Quinta-feira", grupo: "G2", EBD: "", Tarde: "", Noite: "" },
    { mes: "Dezembro", dia: 25, dia_semana: "Sexta-feira", grupo: "G1", EBD: "", Tarde: "", Noite: "" },
    { mes: "Dezembro", dia: 27, dia_semana: "Domingo", grupo: "", EBD: "G3", Tarde: "G4", Noite: "G8" },
    { mes: "Dezembro", dia: 30, dia_semana: "Quarta-feira", grupo: "G6", EBD: "", Tarde: "", Noite: "" }
];

// ============ FUNÇÕES DO SISTEMA ============
function mostrarLoading(mostrar) {
    document.getElementById('loading').classList.toggle('visible', mostrar);
}

function mostrarResultado(html) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = html;
    resultado.classList.add('visible');
}

function consultarGrupo() {
    const grupo = document.getElementById('grupoInput').value.toUpperCase();
    const mes = document.getElementById('mesSelect').value;

    if (!grupo || !mes) {
        alert('Por favor, preencha o grupo e selecione o mês.');
        return;
    }

    mostrarLoading(true);

    // Simular carregamento
    setTimeout(() => {
        const resultados = escalas.filter(item => 
            item.mes === mes && 
            (item.grupo === grupo || item.EBD === grupo || item.Tarde === grupo || item.Noite === grupo || item.café === grupo)
        );

        if (resultados.length === 0) {
            mostrarResultado(`<h3>❌ Nenhuma escala encontrada para ${grupo} em ${mes}</h3>`);
            return;
        }

        let html = `<h3>🗓️ ${grupo} serve em ${mes}:</h3>`;
        resultados.forEach(item => {
            const temCafe = item.café === grupo;
            html += `<div class="escala-item ${temCafe ? 'cafe' : ''}">`;
            html += `<strong>${item.dia_semana}, ${item.dia} de ${item.mes}</strong><br>`;
            
            const horarios = [];
            if (item.EBD === grupo) horarios.push('🏛️ EBD');
            if (item.Tarde === grupo) horarios.push('🌅 Tarde');
            if (item.Noite === grupo) horarios.push('🌙 Noite');
            if (item.grupo === grupo) horarios.push('👥 Grupo');
            if (item.café === grupo) horarios.push('☕ Café');
            
            html += horarios.join(' | ');
            html += `</div>`;
        });

        mostrarResultado(html);
        mostrarLoading(false);
    }, 800);
}

function consultarData() {
    const dia = parseInt(document.getElementById('diaInput').value);
    const mes = document.getElementById('mesSelectData').value;

    if (!dia || !mes) {
        alert('Por favor, preencha o dia e selecione o mês.');
        return;
    }

    mostrarLoading(true);

    setTimeout(() => {
        const resultados = escalas.filter(item => item.mes === mes && item.dia === dia);

        if (resultados.length === 0) {
            mostrarResultado(`<h3>❌ Nenhuma escala encontrada para ${dia} de ${mes}</h3>`);
            return;
        }

        const item = resultados[0];
        let html = `<h3>📅 Escalas para ${dia} de ${mes}:</h3>`;
        html += `<div class="escala-item ${item.café ? 'cafe' : ''}">`;
        
        if (item.EBD) html += `<strong>🏛️ EBD:</strong> ${item.EBD}<br>`;
        if (item.Tarde) html += `<strong>🌅 Tarde:</strong> ${item.Tarde}<br>`;
        if (item.Noite) html += `<strong>🌙 Noite:</strong> ${item.Noite}<br>`;
        if (item.grupo) html += `<strong>👥 Grupo:</strong> ${item.grupo}<br>`;
        if (item.café) html += `<strong>☕ Café:</strong> ${item.café}<br>`;
        
        html += `</div>`;

        mostrarResultado(html);
        mostrarLoading(false);
    }, 800);
}

function consultaRapida() {
    const pergunta = document.getElementById('perguntaInput').value.toLowerCase().trim();
    
    if (!pergunta) {
        alert('Por favor, digite sua consulta.');
        return;
    }

    mostrarLoading(true);

    setTimeout(() => {
        let resposta = '';
        
        // Detectar padrões na pergunta
        const grupoMatch = pergunta.match(/\bg([1-8])\b/i);
        const mesMatch = pergunta.match(/\b(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)\b/i);
        const diaMatch = pergunta.match(/\b(\d{1,2})\b/);
        
        if (grupoMatch && mesMatch) {
            // Consulta do tipo "G1 em Maio"
            const grupo = `G${grupoMatch[1]}`;
            const mes = mesMatch[0].charAt(0).toUpperCase() + mesMatch[0].slice(1);
            consultarGrupoEspecifico(grupo, mes);
            return;
        } else if (diaMatch && mesMatch) {
            // Consulta do tipo "15 de Abril"
            const dia = parseInt(diaMatch[1]);
            const mes = mesMatch[0].charAt(0).toUpperCase() + mesMatch[0].slice(1);
            consultarDataEspecifica(dia, mes);
            return;
        } else if (pergunta.includes('hoje')) {
            // Escalas de hoje
            const hoje = new Date();
            const dia = hoje.getDate();
            const mesNum = hoje.getMonth();
            const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
            const mes = meses[mesNum];
            
            consultarDataEspecifica(dia, mes);
            return;
        } else {
            resposta = `❌ <strong>Consulta não reconhecida.</strong><br>
                       Tente formatos como:<br>
                       • "G1 em Maio"<br>
                       • "15 de Abril"<br>
                       • "escalas hoje"`;
        }

        mostrarResultado(`<h3>💬 Sua consulta: "${pergunta}"</h3>${resposta}`);
        mostrarLoading(false);
    }, 800);
}

function consultarGrupoEspecifico(grupo, mes) {
    const resultados = escalas.filter(item => 
        item.mes === mes && 
        (item.grupo === grupo || item.EBD === grupo || item.Tarde === grupo || item.Noite === grupo || item.café === grupo)
    );

    if (resultados.length === 0) {
        mostrarResultado(`<h3>❌ Nenhuma escala encontrada para ${grupo} em ${mes}</h3>`);
        return;
    }

    let html = `<h3>🗓️ ${grupo} serve em ${mes}:</h3>`;
    resultados.forEach(item => {
        const temCafe = item.café === grupo;
        html += `<div class="escala-item ${temCafe ? 'cafe' : ''}">`;
        html += `<strong>${item.dia_semana}, ${item.dia} de ${item.mes}</strong><br>`;
        
        const horarios = [];
        if (item.EBD === grupo) horarios.push('🏛️ EBD');
        if (item.Tarde === grupo) horarios.push('🌅 Tarde');
        if (item.Noite === grupo) horarios.push('🌙 Noite');
        if (item.grupo === grupo) horarios.push('👥 Grupo');
        if (item.café === grupo) horarios.push('☕ Café');
        
        html += horarios.join(' | ');
        html += `</div>`;
    });

    mostrarResultado(html);
    mostrarLoading(false);
}

function consultarDataEspecifica(dia, mes) {
    const resultados = escalas.filter(item => item.mes === mes && item.dia === dia);

    if (resultados.length === 0) {
        mostrarResultado(`<h3>❌ Nenhuma escala encontrada para ${dia} de ${mes}</h3>`);
        return;
    }

    const item = resultados[0];
    let html = `<h3>📅 Escalas para ${dia} de ${mes}:</h3>`;
    html += `<div class="escala-item ${item.café ? 'cafe' : ''}">`;
    
    if (item.EBD) html += `<strong>🏛️ EBD:</strong> ${item.EBD}<br>`;
    if (item.Tarde) html += `<strong>🌅 Tarde:</strong> ${item.Tarde}<br>`;
    if (item.Noite) html += `<strong>🌙 Noite:</strong> ${item.Noite}<br>`;
    if (item.grupo) html += `<strong>👥 Grupo:</strong> ${item.grupo}<br>`;
    if (item.café) html += `<strong>☕ Café:</strong> ${item.café}<br>`;
    
    html += `</div>`;

    mostrarResultado(html);
    mostrarLoading(false);
}

// Enter key support
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const box = this.closest('.consulta-box');
                const button = box.querySelector('button');
                button.click();
            }
        });
    });
});
