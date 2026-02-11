import React, { useState } from 'react';

interface SecretPageProps {
    onExit: () => void;
}

const SecretPage = ({ onExit }: SecretPageProps) => {
    const stats = [
        { label: 'Total Balance', value: '$12,450.00', change: '+2.5%', color: '#4f46e5' },
        { label: 'Monthly Income', value: '$4,200.00', change: '+10%', color: '#10b981' },
        { label: 'Monthly Expenses', value: '$2,150.40', change: '-5.2%', color: '#ef4444' },
        { label: 'Savings Goal', value: '85%', change: 'Progress', color: '#f59e0b' },
    ];

    const transactions = [
        { id: 1, name: 'Apple Store', category: 'Tech', amount: -999.00, date: '2023-10-24', status: 'Completed' },
        { id: 2, name: 'Salary Deposit', category: 'Work', amount: 4200.00, date: '2023-10-20', status: 'Completed' },
        { id: 3, name: 'Starbucks', category: 'Food', amount: -6.50, date: '2023-10-19', status: 'Pending' },
        { id: 4, name: 'Netflix Subscription', category: 'Entertainment', amount: -15.99, date: '2023-10-18', status: 'Completed' },
        { id: 5, name: 'Airbnb Booking', category: 'Travel', amount: -450.00, date: '2023-10-15', status: 'Completed' },
    ];

    const budget = [
        { category: 'Food & Drinks', spent: 450, limit: 600, color: '#10b981' },
        { category: 'Rent & Utilities', spent: 1200, limit: 1200, color: '#4f46e5' },
        { category: 'Entertainment', spent: 300, limit: 200, color: '#ef4444' },
    ];

    return (
        <div style={styles.container}>
            <aside style={styles.sidebar}>
                <div style={styles.logo}>LAB.FINANCE</div>
                <nav style={styles.nav}>
                    <div style={{ ...styles.navItem, ...styles.navActive }}>Overview</div>
                    <div style={styles.navItem}>Transactions</div>
                    <div style={styles.navItem}>Budgets</div>
                    <div style={styles.navItem}>API Settings</div>
                </nav>
                <button onClick={onExit} style={styles.backBtn}>← Exit Lab</button>
            </aside>

            <main style={styles.main}>
                <header style={styles.header}>
                    <div>
                        <h1 style={styles.title}>Money Usage Dashboard</h1>
                        <p style={styles.subtitle}>Welcome back, Duong. Here is your financial summary.</p>
                    </div>
                    <button style={styles.addBtn}>+ Add Transaction</button>
                </header>

                <div style={styles.statsGrid}>
                    {stats.map((stat, i) => (
                        <div key={i} style={styles.card}>
                            <span style={styles.cardLabel}>{stat.label}</span>
                            <div style={styles.cardValue}>{stat.value}</div>
                            <span style={{ ...styles.cardChange, color: stat.color }}>{stat.change}</span>
                        </div>
                    ))}
                </div>

                <div style={styles.dashboardGrid}>
                    <div style={{ ...styles.card, flex: 2 }}>
                        <h3 style={styles.cardTitle}>Recent Transactions</h3>
                        <table style={styles.table}>
                            <thead>
                                <tr style={styles.tableHead}>
                                    <th style={styles.th}>Name</th>
                                    <th style={styles.th}>Category</th>
                                    <th style={styles.th}>Amount</th>
                                    <th style={styles.th}>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((t) => (
                                    <tr key={t.id} style={styles.tableRow}>
                                        <td style={styles.td}>{t.name}</td>
                                        <td style={styles.td}><span style={styles.badge}>{t.category}</span></td>
                                        <td style={{ ...styles.td, color: t.amount > 0 ? '#10b981' : '#fff', fontWeight: '600' }}>
                                            {t.amount > 0 ? `+${t.amount}` : t.amount}
                                        </td>
                                        <td style={styles.td}>{t.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Budget Progress */}
                    <div style={{ ...styles.card, flex: 1 }}>
                        <h3 style={styles.cardTitle}>Budget Limits</h3>
                        {budget.map((b, i) => (
                            <div key={i} style={{ marginBottom: '1.5rem' }}>
                                <div style={styles.budgetInfo}>
                                    <span>{b.category}</span>
                                    <span>${b.spent} / ${b.limit}</span>
                                </div>
                                <div style={styles.progressBg}>
                                    <div style={{
                                        ...styles.progressFill,
                                        width: `${Math.min((b.spent / b.limit) * 100, 100)}%`,
                                        backgroundColor: b.color
                                    }} />
                                </div>
                            </div>
                        ))}
                        <div style={styles.devNote}>
                            <strong>Dev Note:</strong> Connect <code>/api/v1/budgets</code> here.
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#0a0a0a',
        color: '#fff',
        display: 'flex',
        fontFamily: "'Inter', sans-serif",
        overflow: 'hidden',
    },
    sidebar: {
        width: '240px',
        backgroundColor: '#111',
        borderRight: '1px solid #222',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 1.5rem',
    },
    logo: {
        fontSize: '1.2rem',
        fontWeight: '800',
        letterSpacing: '1px',
        marginBottom: '3rem',
        color: '#4f46e5',
    },
    nav: {
        flex: 1,
    },
    navItem: {
        padding: '0.8rem 1rem',
        borderRadius: '8px',
        marginBottom: '0.5rem',
        cursor: 'pointer',
        color: '#888',
        transition: '0.2s',
    },
    navActive: {
        backgroundColor: '#1a1a1a',
        color: '#fff',
    },
    main: {
        flex: 1,
        padding: '2rem 3rem',
        overflowY: 'auto',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2.5rem',
    },
    title: {
        fontSize: '1.8rem',
        margin: 0,
    },
    subtitle: {
        color: '#666',
        margin: '0.5rem 0 0 0',
    },
    addBtn: {
        backgroundColor: '#4f46e5',
        color: 'white',
        border: 'none',
        padding: '0.7rem 1.2rem',
        borderRadius: '8px',
        fontWeight: '600',
        cursor: 'pointer',
    },
    statsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1.5rem',
        marginBottom: '2rem',
    },
    card: {
        backgroundColor: '#111',
        border: '1px solid #222',
        padding: '1.5rem',
        borderRadius: '16px',
    },
    cardLabel: {
        color: '#666',
        fontSize: '0.85rem',
        display: 'block',
        marginBottom: '0.5rem',
    },
    cardValue: {
        fontSize: '1.5rem',
        fontWeight: '700',
    },
    cardChange: {
        fontSize: '0.8rem',
        marginTop: '0.5rem',
        display: 'block',
    },
    dashboardGrid: {
        display: 'flex',
        gap: '1.5rem',
    },
    cardTitle: {
        margin: '0 0 1.5rem 0',
        fontSize: '1.1rem',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    tableHead: {
        textAlign: 'left',
        borderBottom: '1px solid #222',
    },
    th: {
        padding: '1rem 0.5rem',
        color: '#444',
        fontSize: '0.8rem',
        textTransform: 'uppercase',
    },
    tableRow: {
        borderBottom: '1px solid #1a1a1a',
    },
    td: {
        padding: '1rem 0.5rem',
        fontSize: '0.9rem',
    },
    badge: {
        backgroundColor: '#1a1a1a',
        padding: '0.2rem 0.5rem',
        borderRadius: '4px',
        fontSize: '0.75rem',
    },
    budgetInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.85rem',
        marginBottom: '0.5rem',
        color: '#aaa',
    },
    progressBg: {
        height: '8px',
        backgroundColor: '#1a1a1a',
        borderRadius: '4px',
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        borderRadius: '4px',
    },
    devNote: {
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#1a1c2e',
        border: '1px dashed #4f46e5',
        borderRadius: '8px',
        fontSize: '0.8rem',
        color: '#a5b4fc',
    },
    backBtn: {
        padding: '0.8rem',
        background: 'transparent',
        border: '1px solid #333',
        color: '#666',
        borderRadius: '8px',
        cursor: 'pointer',
        marginTop: 'auto',
    }
};

export default SecretPage;