export default function Home() {
  return (
    <>
      {/* Seção Principal */}
      <section className="py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Gerencie Universidades e Estudantes com Facilidade</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Centralize o cadastro, organização e acompanhamento de universidades e estudantes em um só lugar. Simplifique sua gestão acadêmica.
        </p>
      </section>

      {/* Seção de Recursos */}
      <section className="py-10 px-6 bg-muted">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card Universidades */}
          <div className="bg-background rounded-lg shadow p-6 flex flex-col items-center">
          <div className="mb-4 text-primary">
            {/* Ícone universidade/prédio */}
            <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
            <path d="M12 3L2 9l10 6 10-6-10-6zm0 13v5m-6-5v5m12-5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Gerenciamento de Universidades</h3>
          <p className="text-sm text-muted-foreground text-center">
            Cadastre, edite e visualize informações detalhadas das universidades de forma prática e organizada.
          </p>
          </div>

          {/* Card Estudantes */}
          <div className="bg-background rounded-lg shadow p-6 flex flex-col items-center">
          <div className="mb-4 text-primary">
            {/* Ícone estudante/pessoa */}
            <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
            <path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Gerenciamento de Estudantes</h3>
          <p className="text-sm text-muted-foreground text-center">
            Mantenha o cadastro dos estudantes atualizado, com fácil acesso a dados e histórico acadêmico.
          </p>
          </div>
          
          {/* Card Relatórios/Listagem */}
          <div className="bg-background rounded-lg shadow p-6 flex flex-col items-center">
          <div className="mb-4 text-primary">
            {/* Ícone gráfico/dashboard */}
            <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
            <rect x="3" y="13" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
            <rect x="10" y="9" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
            <rect x="17" y="5" width="4" height="16" rx="1" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Listagens e Exclusão Segura</h3>
          <p className="text-sm text-muted-foreground text-center">
            Acesse e explore listagens das universidades e estudantes. Tenha controle sobre seus registros com opções seguras para exclusão.
          </p>
          </div>
        </div>
      </section>
      <footer className="fixed w-full text-center text-xs bg-primary text-primary-foreground py-3 px-6 bottom-0 left-0">
        <div>
          Criado pelo aluno{" "}
          <span className="font-medium underline underline-offset-4">Lucas Furtado</span>
          {" "}para aprendizado na disciplina de Desenvolvimento Web Front-End da UTFPR-FB.
        </div>  
      </footer>
    </>
  );
}