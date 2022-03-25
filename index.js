use {
    solana_sdk::{transaction::TransactionError, transport::TransportError},
    solana_sdk::{
        transaction::TransactionError, transaction_context::TransactionReturnData,
        transport::TransportError,
    },
    std::io,
    tarpc::client::RpcError,
    thiserror::Error,
@@ -25,6 +28,7 @@ pub enum BanksClientError {
        err: TransactionError,
        logs: Vec<String>,
        units_consumed: u64,
        return_data: Option<TransactionReturnData>,
    },
}
