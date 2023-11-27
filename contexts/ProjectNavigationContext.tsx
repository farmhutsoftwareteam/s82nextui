// src/contexts/ProjectNavigationContext.tsx
"use client"
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ProjectNavigationContextProps {
    currentProjectIndex: number;
    setCurrentProjectIndex: (index: number) => void;
}

const ProjectNavigationContext = createContext<ProjectNavigationContextProps | undefined>(undefined);

export const useProjectNavigation = () => {
    const context = useContext(ProjectNavigationContext);
    if (!context) {
        throw new Error('useProjectNavigation must be used within a ProjectNavigationProvider');
    }
    return context;
};

export const ProjectNavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);

    return (
        <ProjectNavigationContext.Provider value={{ currentProjectIndex, setCurrentProjectIndex }}>
            {children}
        </ProjectNavigationContext.Provider>
    );
};
