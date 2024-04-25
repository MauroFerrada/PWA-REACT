import style from './Header.module.css';

const Header = () => {
  return (
    <div className='p-6 bg-emerald-500'>
        <div className="flex h-6">
          <a className='flex space-x-1' href=""> {/* Falta completar el href */}
            <img className="h-full" src="https://www.svgrepo.com/download/389998/guitar-instrument-electric-flying-v.svg" alt="guitar-logo" />
            <div>Header</div>
          </a>
        </div>
    </div>
  );
};

export default Header;