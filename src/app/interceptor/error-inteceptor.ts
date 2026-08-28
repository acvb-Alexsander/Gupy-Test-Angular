import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

/**
 * Interceptor simples para log centralizado de erros HTTP.
 * Não trata os erros (isso continua sendo responsabilidade de cada
 * componente/serviço), apenas garante que todo erro de API fique
 * registrado de forma padronizada, o que ajuda no diagnóstico
 * (ex: correlacionar um erro no front com o log do backend).
 */
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error(
        `[HTTP ERROR] ${req.method} ${req.urlWithParams} -> status ${error.status}`,
        error.error ?? error.message,
      );
      return throwError(() => error);
    }),
  );
};
