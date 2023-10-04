import appStyles from './app.module.css';

export default function HomePage() {
  return (
    <>
      <div>
        <h1 className={appStyles.headingAlign}>Kenny Kin Kee Lai</h1>
        <h2 className={appStyles.headingAlign}>
          Frontend Developer & Hobbyist Photographer
        </h2>
      </div>
    </>
  );
}
