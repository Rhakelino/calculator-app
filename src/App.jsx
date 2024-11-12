import { useState } from 'react';
import { CgMathPlus, CgMathMinus, CgMathDivide, CgMathEqual } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import { MdCalculate } from "react-icons/md";
import { FiDelete } from "react-icons/fi";

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  // Fungsi untuk menghandle input
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Fungsi untuk menghitung hasil
  // Fungsi untuk menghitung hasil
const calculate = () => {
  try {
    setResult(eval(input)); // Mengevaluasi ekspresi dalam input
  } catch (error) {
    setResult("Error"); // Menampilkan pesan error jika ada kesalahan
  }
};


  // Fungsi untuk mereset input
  const reset = () => {
    setInput('');
    setResult(0);
  };

  // Fungsi untuk menghapus angka terakhir (CE)
  const deleteLast = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  // Fungsi untuk menghapus seluruh input (C)
  const clearAll = () => {
    setInput('');
    setResult(0);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-sm w-full p-4 bg-white rounded shadow m-3">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-center mb-4">Calculator</h1>
          <MdCalculate fontSize={60} />
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 text-xl border rounded"
            value={input}
            readOnly
          />
          <div className="text-right text-2xl mt-2">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9'].map((value) => (
            <button
              key={value}
              className="p-4 bg-slate-700 text-white rounded"
              onClick={() => handleClick(value)}
            >
              {value}
            </button>
          ))}
          <button
            className="p-4 bg-slate-700 text-white rounded flex items-center justify-center"
            onClick={() => handleClick('/')}
          >
            <CgMathDivide size={20} />
          </button>
          {['4', '5', '6'].map((value) => (
            <button
              key={value}
              className="p-4 bg-slate-700 text-white rounded"
              onClick={() => handleClick(value)}
            >
              {value}
            </button>
          ))}
          <button
            className="p-4 bg-slate-700 text-white rounded flex items-center justify-center"
            onClick={() => handleClick('*')}
          >
            <AiOutlineClose size={20} />
          </button>
          {['1', '2', '3'].map((value) => (
            <button
              key={value}
              className="p-4 bg-slate-700 text-white rounded"
              onClick={() => handleClick(value)}
            >
              {value}
            </button>
          ))}
          <button
            className="p-4 bg-slate-700 text-white rounded flex items-center justify-center"
            onClick={() => handleClick('-')}
          >
            <CgMathMinus size={20} />
          </button>
          <button
            className="p-4 bg-slate-700 text-white rounded"
            onClick={() => handleClick('0')}
          >
            0
          </button>
          <button
            className="p-4 bg-slate-700 text-white rounded"
            onClick={() => handleClick('.')}
          >
            .
          </button>
          <button
            className="p-4 bg-slate-700 text-white rounded flex items-center justify-center"
            onClick={calculate}
          >
            <CgMathEqual size={20} />
          </button>
          <button
            className="p-4 bg-slate-700 text-white rounded flex items-center justify-center"
            onClick={() => handleClick('+')}
          >
            <CgMathPlus size={20} />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <button
            className="p-4 bg-red-500 text-white rounded"
            onClick={clearAll} // Tombol C (Clear)
          >
            C
          </button>
          <button
            className="p-4 bg-yellow-500 text-white rounded"
            onClick={deleteLast} // Tombol CE (Clear Entry)
          >
            <div className="flex justify-center text-center">
              <FiDelete size={20} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
