import React, { createContext, useContext, useState } from 'react';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);

  const updateProgress = (subjectList) => {
    // Calcule o progresso com base na lista de matérias (subjects) ou na lógica que desejar.
    const completedCount = subjectList.filter((subject) => subject.completed).length;
    const totalItems = subjectList.length;
    const totalProgress = (completedCount / totalItems) * 100;
    setProgress(totalProgress);
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  return useContext(ProgressContext);
};
