"use client";
import styles from "./inputcustom.module.css";
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

interface InputProps { 
  name: string; 
  label: string; 
  type?: string; 
  required?: boolean; 
  ishidden?: boolean; 
  pattern?: RegExp; 
  placeholder?: string; 
}

export const InputCustom: React.FC<InputProps> = ({ name, label, type = 'text', required, pattern, placeholder, ishidden }) => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <div className={styles.inputWrapper}>
      {!ishidden && (
        <label htmlFor={name} className={styles.label}>
          {label}:
        </label>
      )}
      <Controller  control={control}  name={name}  rules={{ required: !ishidden && required ? 'Campo obrigatório' : false, pattern: pattern ? { value: pattern, message: 'Formato inválido' } : undefined}}
        render={({ field }) => (
          <input  {...field} id={name} type={type} placeholder={ishidden ? '' : placeholder} hidden={ishidden} aria-hidden={ishidden} className={`${styles.input} ${errors[name] ? styles.inputError : ''}`}/>
        )}/>
      {errors[name]?.message && ( <p className={styles.errorMessage}>{errors[name]?.message as string}</p>)}
    </div>
  );
};
