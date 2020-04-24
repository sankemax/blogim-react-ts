import React, { useState } from "react";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { TableHead } from "@material-ui/core";

import {
  TablePaginationActionsProps,
  CustomPaginationActionsTableProps,
} from "./types";
import { useGetData } from "../../hooks/getData";

const useStyles1 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  })
);

function TablePaginationActions(props: TablePaginationActionsProps) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
            <KeyboardArrowLeft />
          )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
            <KeyboardArrowRight />
          )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

function calcOffset(page: number, rowsPerPage: number): number {
  return page * rowsPerPage + 1;
}

function calcPage(offset: number, rowsPerPage: number): number {
  return offset === 0 ? 0 : Math.floor((offset - 1) / rowsPerPage);
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomPaginationActionsTable({
  dataType,
  config,
}: CustomPaginationActionsTableProps) {
  const classes = useStyles2();
  const [offset, setOffset] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [isErrorShown, setIsErrorShown] = useState(false);
  const page = calcPage(offset, rowsPerPage);
  const { data, error, loading, } = useGetData(dataType, rowsPerPage, offset, config, setIsErrorShown);

  function handleClose(event?: React.SyntheticEvent, reason?: string) {
    if (reason === 'clickaway') {
      return;
    }

    setIsErrorShown(false);
  }

  if (error) {
    return (
      <div>
        <div>
          body
        </div>
      <Snackbar open={isErrorShown} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Something went wrong: {error}
        </Alert>
      </Snackbar>
      </div>
    );
  }

  if (loading || !data.length) {
    return (<CircularProgress />);
  }

  const headers = Object.keys(data[0]);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setOffset(calcOffset(newPage, rowsPerPage));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setOffset(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table
        stickyHeader
        className={classes.table}
        aria-label="custom pagination table"
      >
        <TableHead>
          <TableRow>
            {headers.map(header => (<TableCell align="right">
              {header}
            </TableCell>))}
          </TableRow>
          {/* {data.map(({ id }: { id: string }) => (
            <TableRow>key={id}</TableRow>
          ))} */}
        </TableHead>
        <TableBody>
          {data
            .map(({ id, ...rest }: any) => ({ key: id, ...rest }))
            .map((row: any) => (
              <TableRow key={row.key}>
                {Object.entries(row).map(([key, value]) =>
                  key === 'key'
                    ? (<TableCell hidden>{value as string | number}</TableCell>)
                    : (<TableCell align="right">{value as string | number}</TableCell>)
                )}
              </TableRow>
            ))}
          {/* {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )} */}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[25, 50, 100]}
              colSpan={3}
              count={data.length + 100000} // TODO: when i ask for data (items/feeds) return the total amount as well
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer >
  );
}
